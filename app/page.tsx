import { Masthead } from "@/components/Masthead";
import { StartupGrid } from "@/components/StartupGrid";
import { getAllStartups } from "@/lib/startups";

export default function HomePage() {
  const startups = getAllStartups();

  return (
    <div className="max-w-5xl mx-auto bg-paper min-h-screen">
      <Masthead />
      <StartupGrid startups={startups} />
    </div>
  );
}
