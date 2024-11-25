import { useRecoilState } from "recoil";
import { data, filterType } from "../store/atoms/atom";

export default function Filters() {
    const [filterTypee, setFilterTypee] = useRecoilState(filterType);
    const [dataa, setData] = useRecoilState(data);
    return <div className="flex justify-center gap-2 mb-4">
        <button
            className={`px-4 py-2 border rounded-lg font-bold ${filterTypee === "7" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => {
                setData({
                    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    sales: [120, 150, 180, 200, 170, 250, 300],
                    expenses: [100, 130, 120, 160, 140, 220, 260],
                  })
                setFilterTypee('7')
            }}
        >
            Last 7 Days
        </button>
        <button
            className={`px-4 py-2 border rounded-lg font-bold ${filterTypee === "30" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => {
                setData({
                    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
                    sales: Array.from({ length: 30 }, () => Math.floor(Math.random() * 300) + 100), // Random sales between 100 and 400
                    expenses: Array.from({ length: 30 }, () => Math.floor(Math.random() * 200) + 50), // Random expenses between 50 and 250
                  })
                  setFilterTypee('30')
            }}
        >
            Last 30 Days
        </button>
    </div>
}