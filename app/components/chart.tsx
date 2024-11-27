'use client'
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import zoomPlugin from 'chartjs-plugin-zoom';
import { useRecoilState } from "recoil";
import { chartType, alldata } from "../store/atoms/atom";
import Buttons from "./buttons";
import Filters from "./filter";
Chart.register(zoomPlugin);

export default function ChartCard() {
  // fot getting the referance of canvas
  const chartRef = useRef<Chart | null>(null);
  const [chartTypee, setChartTypee] = useRecoilState<'line' | 'bar'>(chartType);
  const [dataa, setData] = useRecoilState(alldata);
  
  useEffect(() => {
    // const data = {
    //   labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    //   sales: [120, 150, 180, 200, 170, 250, 300],
    //   expenses: [100, 130, 120, 160, 140, 220, 260],
    // };
    let ctx = document.getElementById('myChart') as HTMLCanvasElement;
    let config = {
      type: chartTypee,
      data: {
        labels: dataa.labels,
        datasets: [
          {
            label: 'Sales',
            data: dataa.sales
          },
          {
            label: 'Expenses',
            data: dataa.expenses
          }
        ]
      },
      //all the zooming and panning config
      options: {
        plugins: {
          zoom: {
            pan: {
              enabled: chartTypee == 'line', // should only work on line graph
            },
            zoom: {
              wheel: {
                enabled: chartTypee == 'line',
              },
              pinch: {
                enabled: chartTypee == 'line'
              }
            }
          }
        }
      }
    }
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    chartRef.current = new Chart(
      ctx,
      config
    );
    // clearing to avoid memory leaks and it runs when comp unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };

  }, [chartTypee,dataa]) // everytype the types changes from bar to line or line to bar

  return (
    <div>
      <Filters/>
      <Buttons/>
      <div style={{ width: 625 }}>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}
