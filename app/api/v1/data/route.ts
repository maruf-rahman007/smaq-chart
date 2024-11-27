/* 
    API route for getting data  
    If you notice you will see its only a single route from where i am sending data for 30 days and the reasons behind this is to make it optimized 
    Doing this i will save computing power as i dont have to ask the backend second time for data for like last 7, 10, 15 days i can simply do in in the 
    Front end.
*/


import { NextResponse } from "next/server";

export async function GET() {
    // THINGS WILL HAPPEN IRL Application
    // auth check 
    // 3 rd party services call 
    // db call 
    // application logic (ML/AI)

    const days: number = 30;

    // Generating data
    const data = {
        labels: generateDays(days),
        sales: generateSales(days),
        expenses: generateExpenses(days),
    };

    console.log("Generated Data: ", data);

    return NextResponse.json({ data });
}

// func for generating labels
function generateDays(days: number): string[] {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // weekdays
    const startIndex = Math.floor(Math.random() * weekdays.length);

    return Array.from({ length: days }, (_, i) => {
        const weekday = weekdays[(startIndex + i) % weekdays.length];
        return `${weekday} (Day ${i + 1})`;
    });
}

// sales data
function generateSales(days: number): number[] {
    return Array.from({ length: days }, () => Math.floor(Math.random() * 300) + 100);
}

// expenses data
function generateExpenses(days: number): number[] {
    return Array.from({ length: days }, () => Math.floor(Math.random() * 200) + 50);
}
