import { useRecoilState } from "recoil";
import { chartType } from "../store/atoms/atom";

export default function Buttons() {
    const [chartTypee, setChartTypee] = useRecoilState<'line' | 'bar'>(chartType);
    return <div className="flex justify-center gap-2 mb-4">
        <button
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg font-bold ${chartTypee === "line" ? "bg-green-800 text-white" : "bg-gray-200"
                }`}
            onClick={() => {
                setChartTypee("line");
            }}
        >
            <img src="/chart.png" alt="Bar Chart" className="h-4 w-4" />
            Line
        </button>
        <button
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg font-bold ${chartTypee === "bar" ? "bg-green-800 text-white" : "bg-gray-200"}`}
            onClick={() => {
                setChartTypee('bar');
            }}
        >
            <img src="/graph-bar.png" alt="Bar Chart" className="h-4 w-4" />
            Bar
        </button>
    </div>
}