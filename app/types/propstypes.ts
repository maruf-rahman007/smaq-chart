import { ChartTypeRegistry } from "chart.js";

export type ChartTypeProps = {
    cardtype: keyof ChartTypeRegistry;
  }