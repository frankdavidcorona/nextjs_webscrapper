import News from "@/components/News";

export default function Home() {
  return (
    <main className="space-y-12 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <span className="animate-typing overflow-hidden whitespace-nowrap font-bold font-mono">
          Get latest sports news from the web&nbsp; 👋
        </span>
      </div>

      {/* content */}
      <News />

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
