import { Route, Routes } from "react-router-dom";
import { Home, Login, NotFound, Signup } from "./pages/";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashBoard";
import DashBoardHome from "./components/DashBoard/Home";
import DashBoardProfile from "./components/DashBoard/Profile";
import DashBoardSettings from "./components/DashBoard/Setting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="home" element={<DashBoardHome />} />
        <Route path="profile" element={<DashBoardProfile />} />
        <Route path="settings" element={<DashBoardSettings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
