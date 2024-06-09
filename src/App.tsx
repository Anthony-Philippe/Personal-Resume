import { BouncyCardsFeatures } from "@components/BouncyCards";
import { Header } from "@layouts/Header";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <BouncyCardsFeatures />
    </div>
  );
}

export default App;
