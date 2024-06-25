import { BouncyCards } from "@components/BouncyCards";
import { Header } from "@layouts/Header";
import { TopBar } from "@layouts/TopBar";
import { Slide } from "react-awesome-reveal";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-black dark:bg-neutral-900 dark:text-white">
      <TopBar />
      <Header />
      <Slide cascade>
        <BouncyCards />
      </Slide>
    </div>
  );
}

export default App;
