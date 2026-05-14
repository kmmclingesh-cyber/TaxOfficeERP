import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Tasks from "./pages/Tasks";
import Notices from "./pages/Notices";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;