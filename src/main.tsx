import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import { ThemeProvider } from "./contexts/ThemeContext";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from './auth/AuthContext';
import PrivateRoute from "./auth/PrivateRoute";
import ErrorPage from './ErrorPage';
import Home from "./Home";
import Login from "./Login";
import RecoverPassword from './RecoverPassword';
import Register from "./Register";
import VerifyCode from './VerifyCode';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover-password" element={<RecoverPassword />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
);
