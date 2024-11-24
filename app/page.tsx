import ChartCard from "./components/chart";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center p-6 text-2xl font-semibold">
        SMAQ
      </div>
      <div className="flex flex-row justify-center">
        <ChartCard cardtype="line" />
      </div>
    </main>
  );
}
