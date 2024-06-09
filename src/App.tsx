import { BouncyCardsFeatures } from "@components/BouncyCards";
import { Header } from "@layouts/Header";
import { TopBar } from "@layouts/TopBar";
import { Slide } from "react-awesome-reveal";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <TopBar />
      <Header />
      <Slide cascade>
        <BouncyCardsFeatures />
      </Slide>
    </div>
  );
}

export default App;
