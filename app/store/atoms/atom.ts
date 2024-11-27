import { atom } from 'recoil';
import { ChartTypeRegistry } from 'chart.js';

// which one to show by default line graph can be manipulated 
export const chartType = atom<'line' | 'bar'>({
  key: 'chartType',
  default: 'line',
});
// original data that comes from backend only changes in backend calls should not be manipulated
export const alldata = atom({
    key: 'alldata',
    default: {
        labels: [""],
        sales: [],
        expenses: [],
      }
})

// the data which will be manipulated from the original data and shown to the canvas
export const alldatashadow = atom({
  key: 'alldatashadow',
  default: {
      labels: [""],
      sales: [],
      expenses: [],
    }
})


// which kind of filter you want like 7 days 15 days 30 days can be manipulated
export const filterType = atom({
    key: 'filterType',
    default: '7'
})