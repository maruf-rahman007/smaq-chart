import { atom } from 'recoil';
import { ChartTypeRegistry } from 'chart.js';

export const chartType = atom<'line' | 'bar'>({
  key: 'chartType',
  default: 'line',
});

export const alldata = atom({
    key: 'alldata',
    default: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        sales: [120, 150, 180, 200, 170, 250, 300],
        expenses: [100, 130, 120, 160, 140, 220, 260],
      }
})

export const filterType = atom({
    key: 'filterType',
    default: '7'
})