import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import CalendarPage from "./pages/Calendar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className={`flex-1 min-h-screen bg-gray-100 ${sidebarOpen ? 'md:ml-64' : ''}`}>
          {/* Mobile Toggle Button */}
          <button
            className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <main className="p-6 mt-16 md:mt-0">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
