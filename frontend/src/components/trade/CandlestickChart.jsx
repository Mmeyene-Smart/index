import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';
import { chartOptions, candlestickSeriesOptions } from './utils/ChartConfig.js';
import { generateInitialData, generateNextCandle } from './utils/generateChartData.js';

function CandlestickChart({ symbol = 'BTC/USD' }) {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart instance
    const chart = createChart(chartContainerRef.current, {
      ...chartOptions,
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });
    chartRef.current = chart;

    // Add candlestick series
    const candlestickSeries = chart.addCandlestickSeries(candlestickSeriesOptions);
    seriesRef.current = candlestickSeries;

    // Set initial data
    const initialData = generateInitialData();
    candlestickSeries.setData(initialData);

    // Update data every second
    const interval = setInterval(() => {
      if (!seriesRef.current) return;

      const data = seriesRef.current.data();
      if (data.length === 0) return;

      const lastCandle = data[data.length - 1];
      const newCandle = generateNextCandle(lastCandle);
      seriesRef.current.update(newCandle);
    }, 1000);

    // Handle resize
    const handleResize = () => {
      if (chartRef.current && chartContainerRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [symbol]);

  return <div ref={chartContainerRef} className="w-full" />;
}

export default CandlestickChart;