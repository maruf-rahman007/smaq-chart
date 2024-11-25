import ChartCard from "./components/chart";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-center mt-20">
        <ChartCard/>
      </div>
      <p className="text-center text-[8rem] font-bold">SMAQ</p>
    </main>
  );
}
