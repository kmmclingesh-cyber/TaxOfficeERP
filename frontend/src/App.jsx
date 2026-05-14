import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Clients from "./pages/Clients";

import Tasks from "./pages/Tasks";

import Notices from "./pages/Notices";

import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
         path="/register"
         element={<Register />}
        />

        {/* PROTECTED ERP */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="clients"
            element={<Clients />}
          />

          <Route
            path="tasks"
            element={<Tasks />}
          />

          <Route
            path="notices"
            element={<Notices />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;