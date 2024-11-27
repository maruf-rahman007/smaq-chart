'use client'
import { useQuery } from "react-query";
import axios from "axios";
import ChartCard from "../components/chart";
import { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { alldata, alldatashadow } from "../store/atoms/atom";
import { filterLastSevenDays } from "../lib/filterdata";
import { fetchData } from "../lib/fetch";

export default function Analytics() {
    const [dataa, setData] = useRecoilState(alldata);
    const [showdata, setShowData] = useRecoilState(alldatashadow);
    const { data, error, isLoading } = useQuery('fetchData', fetchData);
    useEffect(() => {
        if (data && data.data) {
            setData(data.data);
            const sevendaydata = filterLastSevenDays(data.data);
            setShowData(sevendaydata);//By default seven day data will show 
        }
    }, [data]);
    if (isLoading) return <div>Loading...</div>;
    if (error) return error;

    return (
        <main>
            <div className="flex flex-row justify-center mt-20">
                <ChartCard />
            </div>
        </main>
    );
}
