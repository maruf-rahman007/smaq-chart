'use client'
import { useRecoilState } from "recoil";
import { alldata, alldatashadow, filterType } from "../store/atoms/atom";
import { filterLastSevenDays } from "../lib/filterdata";

export default function Filters() {
    const [filterTypee, setFilterTypee] = useRecoilState(filterType);
    const [dataa, setData] = useRecoilState(alldata);
    const [showdata, setShowData] = useRecoilState(alldatashadow);
    return <div className="flex justify-center gap-2 mb-4">
        <button
            className={`px-4 py-2 border rounded-lg font-bold ${filterTypee === "7" ? "bg-green-800 text-white" : "bg-gray-200"}`}
            onClick={() => {
                const seveldaydata = filterLastSevenDays(dataa);
                setShowData(seveldaydata);
                setFilterTypee('7');
            }}
        >
            Last 7 Days
        </button>
        <button
            className={`px-4 py-2 border rounded-lg font-bold ${filterTypee === "30" ? "bg-green-800 text-white" : "bg-gray-200"}`}
            onClick={() => {
                setShowData(dataa);
                setFilterTypee('30');
            }}
        >
            Last 30 Days
        </button>
    </div>
}