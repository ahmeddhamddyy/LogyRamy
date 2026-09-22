import { LangProvider } from "@/lib/lang";
import { BallCursor, Grain, RollingProgress } from "@/components/site/Atmosphere";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Preloader } from "@/components/site/Preloader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { IntroStatement } from "@/components/site/IntroStatement";
import { Story } from "@/components/site/Story";
import { ClubNational } from "@/components/site/ClubNational";
import { WhyBowling } from "@/components/site/WhyBowling";
import { Scorecard } from "@/components/site/Scorecard";
import { Results } from "@/components/site/Results";
import { Achievements } from "@/components/site/Achievements";
import { VideoGallery } from "@/components/site/VideoGallery";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { Press } from "@/components/site/Press";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { PinRow } from "@/components/site/PinRow";

export function App() {
  return (
    <LangProvider>
      <Preloader />
      <SmoothScroll />
      <Grain />
      <BallCursor />
      <RollingProgress />
      <Nav />

      <main>
        <Hero />
        <IntroStatement />
        <PinRow />
        <Story />
        <ClubNational />
        <PinRow count={7} />
        <WhyBowling />
        <Scorecard />
        <Results />
        <Achievements />
        <VideoGallery />
        <PhotoGallery />
        <Press />
        <Contact />
      </main>

      <Footer />
    </LangProvider>
  );
}

export default App;
