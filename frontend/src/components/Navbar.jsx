function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center rounded-lg">
      
      <h1 className="text-2xl font-bold text-gray-700">
        Tax Office ERP
      </h1>

      <div className="flex items-center gap-4">
        
        <input
          type="text"
          placeholder="Search..."
          className="border px-4 py-2 rounded-lg"
        />

        <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full">
          A
        </div>

      </div>
    </div>
  );
}

export default Navbar;