'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game of Life configuration
    const CELL_SIZE = 12;
    let cols: number;
    let rows: number;
    let grid: boolean[][];
    let nextGrid: boolean[][];

    // Add some classic Conway's Game of Life patterns
    const addPattern = (startRow: number, startCol: number, pattern: number[][]) => {
      pattern.forEach((row, i) => {
        row.forEach((cell, j) => {
          const newRow = (startRow + i) % rows;
          const newCol = (startCol + j) % cols;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
            grid[newRow][newCol] = cell === 1;
          }
        });
      });
    };

    // Classic patterns
    const patterns = {
      // Blinker (period 2)
      blinker: [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
      ],
      // Toad (period 2)
      toad: [
        [0, 1, 1, 1],
        [1, 1, 1, 0]
      ],
      // Beacon (period 2)
      beacon: [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 1]
      ],
      // Pulsar (period 3)
      pulsar: [
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]
      ]
    };

    // Set canvas size and initialize grid
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / CELL_SIZE);
      rows = Math.floor(canvas.height / CELL_SIZE);
      
      // Initialize grids
      grid = Array(rows).fill(null).map(() => Array(cols).fill(false));
      nextGrid = Array(rows).fill(null).map(() => Array(cols).fill(false));
      
      // Define text area to avoid (center area where main text appears)
      const centerRow = Math.floor(rows * 0.5);
      const centerCol = Math.floor(cols * 0.5);
      const textAreaWidth = Math.floor(cols * 0.6); // 60% of width
      const textAreaHeight = Math.floor(rows * 0.3); // 30% of height
      
      // Fill in more patterns around the edges and corners
      if (rows > 20 && cols > 20) {
        // Top area patterns - increased density
        for (let i = 0; i < 15; i++) {
          const row = Math.floor(Math.random() * (rows * 0.25));
          const col = Math.floor(Math.random() * cols);
          const patternType = Math.floor(Math.random() * 3);
          
          if (patternType === 0) addPattern(row, col, patterns.blinker);
          else if (patternType === 1) addPattern(row, col, patterns.toad);
          else addPattern(row, col, patterns.beacon);
        }
        
        // Bottom area patterns - increased density
        for (let i = 0; i < 15; i++) {
          const row = Math.floor(rows * 0.75) + Math.floor(Math.random() * (rows * 0.25));
          const col = Math.floor(Math.random() * cols);
          const patternType = Math.floor(Math.random() * 3);
          
          if (patternType === 0) addPattern(row, col, patterns.blinker);
          else if (patternType === 1) addPattern(row, col, patterns.toad);
          else addPattern(row, col, patterns.beacon);
        }
        
        // Left side patterns - increased density
        for (let i = 0; i < 12; i++) {
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(Math.random() * (cols * 0.25));
          // Skip if in text area
          if (Math.abs(row - centerRow) < textAreaHeight / 2) continue;
          
          const patternType = Math.floor(Math.random() * 3);
          if (patternType === 0) addPattern(row, col, patterns.blinker);
          else if (patternType === 1) addPattern(row, col, patterns.toad);
          else addPattern(row, col, patterns.beacon);
        }
        
        // Right side patterns - increased density
        for (let i = 0; i < 12; i++) {
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(cols * 0.75) + Math.floor(Math.random() * (cols * 0.25));
          // Skip if in text area
          if (Math.abs(row - centerRow) < textAreaHeight / 2) continue;
          
          const patternType = Math.floor(Math.random() * 3);
          if (patternType === 0) addPattern(row, col, patterns.blinker);
          else if (patternType === 1) addPattern(row, col, patterns.toad);
          else addPattern(row, col, patterns.beacon);
        }
        
        // Add more random cells for increased activity (avoiding text area)
        for (let i = 0; i < 200; i++) {
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(Math.random() * cols);
          
          // Skip if in text area
          const inTextArea = Math.abs(row - centerRow) < textAreaHeight / 2 && 
                            Math.abs(col - centerCol) < textAreaWidth / 2;
          
          if (!inTextArea && Math.random() < 0.4) {
            grid[row][col] = true;
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Count living neighbors
    const countNeighbors = (row: number, col: number): number => {
      let count = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue; // Skip the cell itself
          
          const newRow = (row + i + rows) % rows; // Wrap around edges
          const newCol = (col + j + cols) % cols;
          
          if (grid[newRow][newCol]) {
            count++;
          }
        }
      }
      return count;
    };

    // Update grid according to Conway's rules
    const updateGrid = () => {
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const neighbors = countNeighbors(row, col);
          const isAlive = grid[row][col];
          
          // Conway's Game of Life rules:
          // 1. Any live cell with 2-3 neighbors survives
          // 2. Any dead cell with exactly 3 neighbors becomes alive
          // 3. All other cells die or stay dead
          if (isAlive && (neighbors === 2 || neighbors === 3)) {
            nextGrid[row][col] = true;
          } else if (!isAlive && neighbors === 3) {
            nextGrid[row][col] = true;
          } else {
            nextGrid[row][col] = false;
          }
        }
      }
      
      // Swap grids
      [grid, nextGrid] = [nextGrid, grid];
    };

    // Draw the grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (grid[row][col]) {
            const x = col * CELL_SIZE;
            const y = row * CELL_SIZE;
            
            // Balanced visibility for better animation perception
            ctx.save();
            ctx.fillStyle = '#2563eb'; // Blue-600 (slightly brighter for better visibility)
            ctx.shadowColor = '#2563eb';
            ctx.shadowBlur = 2;
            ctx.globalAlpha = 0.4; // More visible for smoother animation perception
            ctx.fillRect(x, y, CELL_SIZE - 1, CELL_SIZE - 1);
            ctx.restore();
          }
        }
      }
    };

    // Animation loop
    let lastUpdate = 0;
    const UPDATE_INTERVAL = 120; // Smoother, faster animation
    
    const animate = (currentTime: number) => {
      if (currentTime - lastUpdate >= UPDATE_INTERVAL) {
        updateGrid();
        lastUpdate = currentTime;
      }
      
      drawGrid();
      requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 1,
        background: 'transparent'
      }}
    />
  );
}
