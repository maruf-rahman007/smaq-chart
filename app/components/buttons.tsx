import { useRecoilState } from "recoil";
import { chartType } from "../store/atoms/atom";

export default function Buttons() {
    const [chartTypee, setChartTypee] = useRecoilState<'line' | 'bar'>(chartType);
    return <div className="flex justify-center gap-2 mb-4">
        <button
            className={`px-4 py-2 border rounded-lg font-bold ${chartTypee === "line" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => {
                setChartTypee('line')
            }}
        >
            Line
        </button>
        <button
            className={`px-4 py-2 border rounded-lg font-bold ${chartTypee === "bar" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => {
                setChartTypee('bar')
            }}
        >
            Bar
        </button>
    </div>
}