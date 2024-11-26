

export default function Navbar () {
    return (
        <div>
            <div className="flex justify-between py-4 px-20 mt-6 mx-20 border border-slate-400 rounded-3xl">
                <div>
                    <h1 className="font-bold text-lg" >SMAQ</h1>
                </div>
                <div className="font-semibold text-lg space-x-6">
                    <a href="/">Blog</a>
                    <a href="/">Career</a>
                    <a href="/viewchart">Chart Analytics</a>
                </div>
            </div>
        </div>
    )
}