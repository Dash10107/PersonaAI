"use client";
import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const Detection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoStreamRef = useRef<MediaStream | null>(null);
  const moodIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
          faceapi.nets.faceExpressionNet.loadFromUri("/models"),
          faceapi.nets.ageGenderNet.loadFromUri("/models"),
        ]);
        startVideo();
      } catch (error) {
        console.error("Error loading face-api models:", error);
      }
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoStreamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error("Error accessing webcam:", err));
    };

    loadModels();

    return () => {
      stopVideoStream();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoPlay = async () => {
      const canvas = faceapi.createCanvasFromMedia(video);
      document.body.append(canvas);
      canvasRef.current = canvas;

      // Position canvas over video
      const { left, top, width, height } = video.getBoundingClientRect();
      canvas.style.position = "absolute";
      canvas.style.left = `${left}px`;
      canvas.style.top = `${top}px`;
      canvas.width = width;
      canvas.height = height;
      canvas.style.zIndex = "9999";

      const displaySize = { width, height };
      faceapi.matchDimensions(canvas, displaySize);

      let moodData: faceapi.FaceExpressions[] = [];
      let detectionCount = 0;

      moodIntervalRef.current = setInterval(async () => {
        if (!video.paused && !video.ended) {
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceExpressions()
            .withAgeAndGender();

          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );

          const ctx = canvas.getContext("2d");
          if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);

          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

          if (detections.length > 0) {
            moodData.push(detections[0].expressions);
            detectionCount++;
          }

          // Stop after ~5 seconds
          if (detectionCount >= 50) {
            if (moodIntervalRef.current)
              clearInterval(moodIntervalRef.current);
            stopVideoStream();

            const averageMood = calculateAverageMood(moodData);
            const age = detections[0]?.age ?? 25;

            sendMoodToAPI(averageMood, age);
            canvas.remove();
          }
        }
      }, 100);
    };

    video.addEventListener("play", handleVideoPlay);

    return () => {
      video.removeEventListener("play", handleVideoPlay);
      if (moodIntervalRef.current) clearInterval(moodIntervalRef.current);
      if (canvasRef.current) canvasRef.current.remove();
    };
  }, []);

  const stopVideoStream = () => {
    if (videoStreamRef.current) {
      videoStreamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  const calculateAverageMood = (moodData: faceapi.FaceExpressions[]): string => {
    const aggregatedMood: Record<string, number> = {};

    moodData.forEach((mood) => {
      for (const [key, value] of Object.entries(mood)) {
        aggregatedMood[key] = (aggregatedMood[key] || 0) + value;
      }
    });

    const totalEntries = moodData.length;
    for (const key in aggregatedMood) {
      aggregatedMood[key] /= totalEntries;
    }

    return Object.keys(aggregatedMood).reduce((a, b) =>
      aggregatedMood[a] > aggregatedMood[b] ? a : b
    );
  };

  const sendMoodToAPI = async (mood: string, age: number) => {
    try {
      console.log(`Sending mood: ${mood}, Age: ${age}`);
      // Example API call
      // const response = await fetch("/api/suggest", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ mood, age }),
      // });
      // const data = await response.json();
      // console.log("Suggestions:", data);
    } catch (error) {
      console.error("Error sending mood to API:", error);
    }
  };

  return (
    <div className="video-container relative">
      <video ref={videoRef} width={640} height={480} autoPlay muted />
    </div>
  );
};

export default Detection;
