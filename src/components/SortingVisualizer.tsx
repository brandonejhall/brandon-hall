import React, { useEffect, useRef, useState } from 'react';

type SortingAlgorithm = 'bubble' | 'insertion' | 'quick';

const SortingVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState<boolean>(false);
  const [algorithm, setAlgorithm] = useState<SortingAlgorithm>('bubble');
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  const [sortingTimeout, setSortingTimeout] = useState<NodeJS.Timeout | null>(null);
  const [autoSortComplete, setAutoSortComplete] = useState<boolean>(false);

  // Generate random array with fewer bars (max 10)
  const generateArray = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const size = 10; // Fixed size of 10 bars
    const newArray = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 5);
    setArray(newArray);
    drawArray(newArray);
  };

  // Draw the array on canvas
  const drawArray = (arr: number[], highlightIndices: number[] = []) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const barWidth = canvas.width / arr.length;
    const maxVal = Math.max(...arr);
    
    arr.forEach((value, index) => {
      const height = (value / maxVal) * (canvas.height - 20);
      const x = index * barWidth;
      const y = canvas.height - height;
      
      // Determine color based on whether this index is being compared
      if (highlightIndices.includes(index)) {
        ctx.fillStyle = '#FFFFFF'; // White for active comparison
      } else {
        ctx.fillStyle = '#4caf50'; // Green for normal bars
      }
      
      ctx.fillRect(x, y, barWidth - 1, height);
    });
  };

  // Bubble sort implementation
  const bubbleSort = async () => {
    if (!array.length) return;
    
    const arrCopy = [...array];
    const animations: { array: number[], highlights: number[] }[] = [];
    
    for (let i = 0; i < arrCopy.length; i++) {
      for (let j = 0; j < arrCopy.length - i - 1; j++) {
        animations.push({ array: [...arrCopy], highlights: [j, j + 1] });
        
        if (arrCopy[j] > arrCopy[j + 1]) {
          [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
          animations.push({ array: [...arrCopy], highlights: [j, j + 1] });
        }
      }
    }
    
    // Animate the sorting process
    let i = 0;
    const animate = () => {
      if (i < animations.length) {
        const { array: currentArray, highlights } = animations[i];
        drawArray(currentArray, highlights);
        i++;
        const timeoutId = setTimeout(() => {
          const frameId = requestAnimationFrame(animate);
          setAnimationFrameId(frameId);
        }, 50);
        setSortingTimeout(timeoutId);
      } else {
        setSorting(false);
        setAutoSortComplete(true);
      }
    };
    
    animate();
  };

  // Insertion sort implementation
  const insertionSort = async () => {
    if (!array.length) return;
    
    const arrCopy = [...array];
    const animations: { array: number[], highlights: number[] }[] = [];
    
    for (let i = 1; i < arrCopy.length; i++) {
      const key = arrCopy[i];
      let j = i - 1;
      
      animations.push({ array: [...arrCopy], highlights: [i] });
      
      while (j >= 0 && arrCopy[j] > key) {
        arrCopy[j + 1] = arrCopy[j];
        animations.push({ array: [...arrCopy], highlights: [j, j + 1] });
        j--;
      }
      
      arrCopy[j + 1] = key;
      animations.push({ array: [...arrCopy], highlights: [j + 1] });
    }
    
    // Animate the sorting process
    let i = 0;
    const animate = () => {
      if (i < animations.length) {
        const { array: currentArray, highlights } = animations[i];
        drawArray(currentArray, highlights);
        i++;
        const timeoutId = setTimeout(() => {
          const frameId = requestAnimationFrame(animate);
          setAnimationFrameId(frameId);
        }, 50);
        setSortingTimeout(timeoutId);
      } else {
        setSorting(false);
        setAutoSortComplete(true);
      }
    };
    
    animate();
  };

  // Quick sort implementation
  const quickSort = async () => {
    if (!array.length) return;
    
    const arrCopy = [...array];
    const animations: { array: number[], highlights: number[] }[] = [];
    
    const partition = (arr: number[], low: number, high: number) => {
      const pivot = arr[high];
      let i = low - 1;
      
      for (let j = low; j < high; j++) {
        animations.push({ array: [...arr], highlights: [j, high] });
        
        if (arr[j] <= pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          animations.push({ array: [...arr], highlights: [i, j] });
        }
      }
      
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      animations.push({ array: [...arr], highlights: [i + 1, high] });
      
      return i + 1;
    };
    
    const quickSortRecursive = (arr: number[], low: number, high: number) => {
      if (low < high) {
        const pivotIndex = partition(arr, low, high);
        
        quickSortRecursive(arr, low, pivotIndex - 1);
        quickSortRecursive(arr, pivotIndex + 1, high);
      }
    };
    
    quickSortRecursive(arrCopy, 0, arrCopy.length - 1);
    
    // Animate the sorting process
    let i = 0;
    const animate = () => {
      if (i < animations.length) {
        const { array: currentArray, highlights } = animations[i];
        drawArray(currentArray, highlights);
        i++;
        const timeoutId = setTimeout(() => {
          const frameId = requestAnimationFrame(animate);
          setAnimationFrameId(frameId);
        }, 50);
        setSortingTimeout(timeoutId);
      } else {
        setSorting(false);
        setAutoSortComplete(true);
      }
    };
    
    animate();
  };

  // Auto cycle through sorting algorithms
  useEffect(() => {
    if (autoSortComplete) {
      setAutoSortComplete(false);
      // Cycle to the next algorithm
      const nextAlgo = algorithm === 'bubble' 
        ? 'insertion' 
        : algorithm === 'insertion' 
          ? 'quick' 
          : 'bubble';
      
      // Set a timeout to allow a brief pause before next sort
      const timeoutId = setTimeout(() => {
        setAlgorithm(nextAlgo);
        generateArray();
        setSorting(true);
        
        // Start the next sort algorithm
        if (nextAlgo === 'bubble') {
          bubbleSort();
        } else if (nextAlgo === 'insertion') {
          insertionSort();
        } else {
          quickSort();
        }
      }, 1000); // 1-second pause between sorts
      
      setSortingTimeout(timeoutId);
    }
  }, [autoSortComplete, algorithm]);

  // Start the auto-sorting cycle when component mounts
  useEffect(() => {
    generateArray();
    setSorting(true);
    bubbleSort();
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (sortingTimeout) {
        clearTimeout(sortingTimeout);
      }
    };
  }, []);

  // Handle canvas resize and redraw
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const container = canvas.parentElement;
      if (!container) return;
      
      // Set canvas size to match container but keep height smaller
      canvas.width = container.clientWidth;
      canvas.height = Math.min(200, window.innerHeight * 0.3); // Make the visualization smaller
      
      // Redraw array with new dimensions
      if (array.length) {
        drawArray(array);
      } else {
        generateArray();
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [array]);

  return (
    <div className="sorting-visualizer">
      <div className="command-prompt mb-2">brandon@hall:~$ generate-visualization --type=sorting</div>
      <div className="canvas-container">
        <canvas ref={canvasRef} />
      </div>
      <div className="text-center text-xs text-terminal-gray mt-2">
        Algorithm: {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort
      </div>
    </div>
  );
};

export default SortingVisualizer;
