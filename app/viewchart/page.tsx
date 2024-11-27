'use client'
import { useQuery } from "react-query";
import axios from "axios";
import ChartCard from "../components/chart";
import { useEffect, useState } from 'react';

export default function Analytics() {

    const fetchData = async () => {
        const response = await axios.get('/api/v1/data');  // call the Next.js API route
        return response.data;
      };
      const { data, error, isLoading } = useQuery('fetchData', fetchData);

      if (isLoading) return <div>Loading...</div>;
      if (error) return error
      console.log(data);
  return (
    <main>
      <div className="flex flex-row justify-center mt-20">
        <ChartCard />
      </div>
    </main>
  );
}
