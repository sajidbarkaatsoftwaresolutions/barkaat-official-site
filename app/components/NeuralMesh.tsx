"use client";

import { useEffect, useRef } from "react";

export default function NeuralMesh() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Generate random neural network nodes
    const nodes: Array<{ x: number; y: number; r: number; opacity: number }> = [];
    const nodeCount = 12;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 2 + 1,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }

    // Clear existing content
    svg.innerHTML = '';

    // Add defs for gradient and filters
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute('id', 'glow');
    
    const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
    feGaussianBlur.setAttribute('stdDeviation', '2');
    
    const feComponentTransfer = document.createElementNS('http://www.w3.org/2000/svg', 'feComponentTransfer');
    const feFuncA = document.createElementNS('http://www.w3.org/2000/svg', 'feFuncA');
    feFuncA.setAttribute('type', 'linear');
    feFuncA.setAttribute('slope', '0.5');
    
    feComponentTransfer.appendChild(feFuncA);
    filter.appendChild(feGaussianBlur);
    filter.appendChild(feComponentTransfer);
    defs.appendChild(filter);
    svg.appendChild(defs);

    // Draw connections
    const connectDistance = 40;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectDistance) {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', `${nodes[i].x}%`);
          line.setAttribute('y1', `${nodes[i].y}%`);
          line.setAttribute('x2', `${nodes[j].x}%`);
          line.setAttribute('y2', `${nodes[j].y}%`);
          line.setAttribute('stroke', '#D3414E');
          line.setAttribute('stroke-width', '0.5');
          line.setAttribute('opacity', `${(1 - distance / connectDistance) * 0.3}`);
          line.setAttribute('filter', 'url(#glow)');
          svg.appendChild(line);
        }
      }
    }

    // Draw nodes
    nodes.forEach((node, index) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', `${node.x}%`);
      circle.setAttribute('cy', `${node.y}%`);
      circle.setAttribute('r', `${node.r}`);
      circle.setAttribute('fill', '#D3414E');
      circle.setAttribute('opacity', `${node.opacity}`);
      circle.setAttribute('filter', 'url(#glow)');
      
      // Add animation
      const animateOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      animateOpacity.setAttribute('attributeName', 'opacity');
      animateOpacity.setAttribute('values', `${node.opacity};${Math.min(1, node.opacity + 0.3)};${node.opacity}`);
      animateOpacity.setAttribute('dur', `${Math.random() * 3 + 2}s`);
      animateOpacity.setAttribute('repeatCount', 'indefinite');
      
      circle.appendChild(animateOpacity);
      svg.appendChild(circle);
    });

  }, []);

  return (
    <svg
      ref={svgRef}
      className="neural-mesh-svg w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
    />
  );
}
