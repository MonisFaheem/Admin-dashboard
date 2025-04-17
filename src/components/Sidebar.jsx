import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Calendar as CalendarIcon,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/", name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/users", name: "Users", icon: <Users size={20} /> },
    { path: "/tasks", name: "Tasks", icon: <ClipboardList size={20} /> },
    { path: "/calendar", name: "Calendar", icon: <CalendarIcon size={20} /> },
  ];

  return (
    <div
      className={`z-40 fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0 md:static`}
    >
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => {
              if (window.innerWidth < 768) toggleSidebar(); // auto-close on mobile
            }}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 ${
              location.pathname === item.path ? "bg-gray-200 font-semibold" : ""
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

