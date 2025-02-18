import { Outlet, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const DashboardLayout = () => {
  const { logout } = useAuth();

  return (
    <div className="h-screen flex flex-col items-center justify-between w-full text-center text-neutral-50 bg-neutral-950">
      <h1>Dashboard</h1>
      <nav className="flex gap-4 mt-48 text-white">
        <Link to="home">Home</Link> | <Link to="profile">Profile</Link> |
        <Link to="settings">Settings</Link> |
        <button className="text-red-500" onClick={logout}>
          Logout
        </button>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
