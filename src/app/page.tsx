import ContentLandingPage from "@/app/components/landing-page/content-landing-page";
import BackgroundLandingPage from "@/app/components/landing-page/background-landing-page";
import Topbar from "@/app/components/topbar/topbar";

export default function Home() {
  return (
    <div className="font-sans bg-[var(--background)] relative min-h-screen relative flex flex-col overflow-x-hidden">
      <Topbar />
      <ContentLandingPage />
      <BackgroundLandingPage />
    </div>
  );
}
