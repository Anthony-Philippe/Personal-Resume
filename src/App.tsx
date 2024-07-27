import { BouncyCards } from "@components/BouncyCards";
import { Header } from "@layouts/Header";
import { TopBar } from "@layouts/TopBar";
import { Slide } from "react-awesome-reveal";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';

import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-black dark:bg-neutral-900 dark:text-white">
      <Router>
        <TopBar />
        <Header />
        <Slide cascade>
          <BouncyCards />
        </Slide>
        <Routes>
          <Route path="/" element={<BouncyCards />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
