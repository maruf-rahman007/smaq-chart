'use client'
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import zoomPlugin from 'chartjs-plugin-zoom';
import { useRecoilState } from "recoil";
import { chartType, alldata, alldatashadow } from "../store/atoms/atom";
import Buttons from "./buttons";
import Filters from "./filter";
Chart.register(zoomPlugin);

export default function ChartCard() {
  const chartRef = useRef<Chart | null>(null);
  const chartContainerRef = useRef<HTMLCanvasElement | null>(null);
  const [chartTypee, setChartTypee] = useRecoilState<'line' | 'bar'>(chartType);
  const [dataa, setData] = useRecoilState(alldata);
  const [showdata, setShowData] = useRecoilState(alldatashadow);

  useEffect(() => {
    if (chartContainerRef.current && typeof window !== "undefined") {
      const ctx = chartContainerRef.current.getContext("2d");

      if (ctx) {  // Ensure ctx is not null
        let config = {
          type: chartTypee,
          data: {
            labels: showdata.labels,
            datasets: [
              {
                label: 'Sales',
                data: showdata.sales
              },
              {
                label: 'Expenses',
                data: showdata.expenses
              }
            ]
          },
          options: {
            plugins: {
              zoom: {
                pan: {
                  enabled: chartTypee === 'line', // Should only work on line graph
                },
                zoom: {
                  wheel: {
                    enabled: chartTypee === 'line',
                  },
                  pinch: {
                    enabled: chartTypee === 'line'
                  }
                }
              }
            }
          }
        };

        // Destroy the previous chart instance if it exists
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, config);

        // Cleanup on component unmount
        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
            chartRef.current = null;
          }
        };
      } else {
        console.error('Canvas context is null');
      }
    }
  }, [chartTypee, dataa, showdata]);

  return (
    <div>
      <Filters />
      <Buttons />
      <div className="mt-4 w-[400px] h-[1000px] md:w-[500px] lg:w-[625px] pr-6">
        <canvas ref={chartContainerRef}></canvas>
      </div>
    </div>
  );
}
