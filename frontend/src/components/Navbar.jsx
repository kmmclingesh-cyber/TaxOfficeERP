function Navbar() {
  const user = JSON.parse(
  localStorage.getItem("user")
);
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center rounded-lg">
      
      <div>

  <h1 className="text-3xl font-bold">
    Tax Office ERP
  </h1>

  <p className="text-gray-500">
    Logged in as {user?.role}
  </p>

</div>

      <div className="flex items-center gap-4">
        
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded-lg"
        />

        <div className="flex items-center gap-4">

  <button
    onClick={() => {

      localStorage.removeItem("token");

      localStorage.removeItem("user");

      window.location.href = "/login";
    }}
    className="bg-red-500 text-white px-4 py-2 rounded-lg"
  >
    Logout
  </button>

  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">

    {JSON.parse(localStorage.getItem("user"))?.name?.charAt(0)}

  </div>

</div>

      </div>
    </div>
  );
}

export default Navbar;