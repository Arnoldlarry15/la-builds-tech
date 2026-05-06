'use client';

import { useEffect, useRef } from 'react';
import styles from './SystemVisualization.module.css';

export default function SystemVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Account for device pixel ratio to prevent blur on retina displays
    const dpr = window.devicePixelRatio || 1;

    const updateCanvasSize = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      // Reset transform before scaling to prevent blur on resize
      ctx.resetTransform();

      // Scale context to match device pixel ratio
      ctx.scale(dpr, dpr);

      return { width, height };
    };

    let { width, height } = updateCanvasSize();
    let animationFrame = 0;

    // Node positions
    const nodes = [
      { label: 'INPUT', x: width * 0.15, y: height / 2, color: '#00c2ff' },
      { label: 'AI PROCESSING', x: width * 0.4, y: height / 2, color: '#7c3aed' },
      { label: 'AUTOMATION', x: width * 0.65, y: height / 2, color: '#7c3aed' },
      { label: 'OUTPUTS', x: width * 0.9, y: height / 2, color: '#00c2ff' },
    ];

    const drawNode = (node: typeof nodes[0], pulse: number) => {
      const radius = 24 + pulse * 4;

      // Outer glow
      ctx.fillStyle = `rgba(${node.color === '#00c2ff' ? '0, 194, 255' : '124, 58, 237'}, 0.1)`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius + 8, 0, Math.PI * 2);
      ctx.fill();

      // Core circle
      ctx.fillStyle = node.color;
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = '#0a0a0a';
      ctx.font = 'bold 12px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.label, node.x, node.y);
    };

    const drawArrow = (fromX: number, toX: number, y: number, progress: number) => {
      const startX = fromX + (toX - fromX) * 0.15;
      const endX = fromX + (toX - fromX) * 0.85;
      const currentX = startX + (endX - startX) * progress;

      // Connection line
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
      ctx.stroke();

      // Animated dot
      ctx.fillStyle = '#7c3aed';
      ctx.beginPath();
      ctx.arc(currentX, y, 4, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, width, height);

      const time = (animationFrame % 200) / 200; // Loop every 200 frames
      const pulse = Math.sin(animationFrame * 0.02) * 0.5 + 0.5;

      // Draw connections
      for (let i = 0; i < nodes.length - 1; i++) {
        drawArrow(nodes[i].x, nodes[i + 1].x, nodes[i].y, time);
      }

      // Draw nodes
      nodes.forEach((node) => {
        drawNode(node, pulse);
      });

      animationFrame++;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newDimensions = updateCanvasSize();
      width = newDimensions.width;
      height = newDimensions.height;

      // Update node positions for new dimensions
      nodes[0].x = width * 0.15;
      nodes[1].x = width * 0.4;
      nodes[2].x = width * 0.65;
      nodes[3].x = width * 0.9;
      nodes.forEach(node => node.y = height / 2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current !== undefined) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
