import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from "./auth/PrivateRoute";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <AuthProvider>
        <Router>
          <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
);
