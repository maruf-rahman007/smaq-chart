import ChartCard from "./components/chart";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-center mt-20">
        <button className="border rounded-md py-1 px-5 text-green-800 bg-slate-200 font-bold text-lg">
          Coming
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-2">
          <span className="text-center text-[4rem] font-semibold">Upgrade Data Delivery</span>
          <span className="text-center text-[4rem] font-semibold">with <span className="text-center text-[4rem] font-bold text-green-800">AI Dashboards</span></span>
          <span className="text-center text-[4rem] font-bold text-green-800">and Reports</span>
        </div>
        <div className="flex text-center">
          <p className="text-2xl p-2">Embed <span className="font-bold">customer-facing analytics</span> in your product <br /> and empower your users to <span className="font-bold">make better decisions.</span></p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="border rounded-md py-2 px-5 text-white bg-green-800 hover:bg-green-400 font-bold text-lg">
            Join Waitlist
        </button>
      </div>
      
    </main>
  );
}
