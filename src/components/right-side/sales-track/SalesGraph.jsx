import React, { useEffect, useRef } from "react";
import styles from "./SalesGraph.module.css";

const SalesGraph = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 280;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Chart Data
    const dataPoints = [
      { x: 80, y1: 100, y2: 120 },
      { x: 130, y1: 110, y2: 130 },
      { x: 210, y1: 130, y2: 150 },
      { x: 290, y1: 100, y2: 100 },
      { x: 370, y1: 70, y2: 90 },
      { x: 450, y1: 30, y2: 50 },
      { x: 530, y1: 60, y2: 90 },
    ];

    // Function to draw a line
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

    // Draw the chart grid
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;
    for (let i = 50; i <= 550; i += 80) {
      ctx.beginPath();
      ctx.moveTo(i, 10);
      ctx.lineTo(i, 200);
      ctx.stroke();
    }

    for (let i = 10; i <= 200; i += 40) {
      ctx.beginPath();
      ctx.setLineDash([5, 5]); // Dotted line pattern: 5px dash, 5px gap
      ctx.moveTo(50, i);
      ctx.lineTo(550, i);
      ctx.stroke();
      ctx.setLineDash([]); // Reset to solid for other drawings
    }

    // Draw the lines
    drawLine(dataPoints, "#007bff"); // Blue Line
    drawLine(
      dataPoints.map((p) => ({ ...p, y1: p.y2 })),
      "#f4a261"
    ); // Orange Line

    // Add Labels
    ctx.fillStyle = "#6c757d";
    ctx.font = "12px Arial";
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
    for (let i = 0; i < yLabels.length; i++) {
      ctx.fillText(yLabels[i], 560, 200 - i * 30); // Right side (✅)
    }
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default SalesGraph;
