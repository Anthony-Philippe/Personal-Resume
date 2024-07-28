import { BouncyCards } from "@components/BouncyCards";
import { Header } from "@layouts/Header";
import { TopBar } from "@layouts/TopBar";
import { Slide } from "react-awesome-reveal";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProjectPage from './layouts/ProjectDetails';

import "./App.css";

const HomeRoute = () => {
  return (
    <>
      <Header />
      <Slide cascade>
        <BouncyCards />
      </Slide>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-black dark:bg-neutral-900 dark:text-white">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
