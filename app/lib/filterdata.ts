// just a helper function for filtering last seven day data from 30 days data



export function filterLastSevenDays(data: any) {
    const lastSevenDays = {
      labels: data.labels.slice(-7), // Get the last 7 labels
      sales: data.sales.slice(-7),   // Get the last 7 sales
      expenses: data.expenses.slice(-7), // Get the last 7 expenses
    };
    return lastSevenDays;
}