import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        Tax ERP
      </h1>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/notices">Notices</Link>
      </nav>
    </div>
  );
}

export default Sidebar;