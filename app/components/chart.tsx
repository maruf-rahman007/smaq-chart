'use client'
import { useEffect, useRef } from "react";
import Chart, { ChartTypeRegistry } from "chart.js/auto";
import { ChartTypeProps } from "../types/propstypes";


export default function ChartCard({ cardtype }: ChartTypeProps) {

    useEffect(()=>{
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
          ];
          let ctx = document.getElementById('myChart') as HTMLCanvasElement;
          var chart = new Chart(
            ctx,
            {
              type: cardtype,
              data: {
                labels: data.map(row => row.year),
                datasets: [
                  {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.count)
                  }
                ]
              }
            }
          );
    },[])

  return (
    <div>
      <div style={{width: 625}}>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}
