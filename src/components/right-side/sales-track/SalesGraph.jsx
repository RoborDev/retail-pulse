import React, { useEffect, useRef, useState } from "react";
import styles from "./SalesGraph.module.css";

const SalesGraph = () => {
  const canvasRef = useRef(null);
  const [update, setUpdate] = useState(0); // This will trigger re-renders automatically

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 608;
    canvas.height = 223;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Chart Data
    const dataPoints = [
      { x: 80, y1: 100, y2: 120 },
      { x: 150, y1: 110, y2: 130 },
      { x: 230, y1: 130, y2: 150 },
      { x: 310, y1: 100, y2: 100 },
      { x: 390, y1: 70, y2: 90 },
      { x: 470, y1: 30, y2: 50 },
      { x: 550, y1: 60, y2: 90 },
    ];

    const drawLine = (points, color) => {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y1);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y1);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();
    };

    // Draw grid
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    const verticalLinesX = [80, 150, 230, 310, 390, 470, 550];
    verticalLinesX.forEach((x) => {
      ctx.beginPath();
      ctx.moveTo(x, 10);
      ctx.lineTo(x, 200);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    for (let i = 10; i <= 200; i += 40) {
      if (i !== 80 && i !== 120) {
        ctx.beginPath();
        ctx.moveTo(60, i);
        ctx.lineTo(560, i);
        ctx.stroke();
      }
    }

    // Draw lines
    drawLine(dataPoints, "#007bff");
    drawLine(
      dataPoints.map((p) => ({ ...p, y1: p.y2 })),
      "#f4a261"
    );

    // Labels
    ctx.fillStyle = "#6c757d";
    ctx.font = "15px 'Schibsted Grotesk'";
    const labels = [
      "12:00 am",
      "3:00 am",
      "6:00 am",
      "9:00 am",
      "12:00 pm",
      "3:00 pm",
      "6:00 pm",
    ];
    dataPoints.forEach((p, i) => {
      ctx.fillText(labels[i], p.x - 20, 220);
    });

    const yLabels = ["0", "10K", "", "30K", "", "50K", "70K"];
    yLabels.forEach((label, i) => {
      ctx.fillText(label, 580, 200 - i * 30);
    });
  }, [update]); // 🔄 Runs every time 'update' changes

  // Automatically update every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate((prev) => prev + 1); // 🔄 Force re-render
    }, 500); // Adjust timing as needed

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default SalesGraph;
