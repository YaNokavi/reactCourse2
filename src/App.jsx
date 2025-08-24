import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import ButtonsSection from "./components/ButtonsSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import EffectsSection from "./components/EffectsSection";

export default function App() {
  const [tab, setTab] = useState("effects");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <ButtonsSection />
          </>
        )}
        {tab === "feedback" && (
          <>
            {" "}
            <FeedbackSection />
          </>
        )}

        {tab === "effects" && <EffectsSection />}
      </main>
    </>
  );
}
