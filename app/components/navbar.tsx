

export default function Navbar () {
    return (
        <div>
            <div className="flex justify-between py-4 px-4 sm:px-20 mt-6 sm:mx-20 border border-slate-400 rounded-3xl">
                <div>
                    <a href="/"><h1 className="font-bold text-lg text-green-700">SMAQ</h1></a>
                </div>
                <div className="font-semibold text-lg sm:space-x-6 space-x-2">
                    <a href="/">Blog</a>
                    <a href="/">Career</a>
                    <a href="/viewchart">Chart Analytics</a>
                </div>
            </div>
        </div>
    )
}