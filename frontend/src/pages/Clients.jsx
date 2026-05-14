import { useEffect, useState } from "react";

import axios from "axios";

function Clients() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [clients, setClients] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    pan: "",
    gst: "",
    status: "Active",
  });

  /* =========================
     FETCH CLIENTS
  ========================= */

  const fetchClients = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/clients"
      );

      setClients(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  /* =========================
     HANDLE INPUT
  ========================= */

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================
     ADD CLIENT
  ========================= */

  const handleAddClient = async () => {

    try {

      await axios.post(
        "http://localhost:5000/clients",
        formData
      );

      fetchClients();

      setShowModal(false);

      setFormData({
        name: "",
        pan: "",
        gst: "",
        status: "Active",
      });

    } catch (error) {

      console.log(error);
    }
  };

  /* =========================
     DELETE CLIENT
  ========================= */

  const handleDeleteClient = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/clients/${id}`
      );

      fetchClients();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Clients
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          + Add Client
        </button>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">PAN</th>
              <th className="text-left p-4">GST</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>

          </thead>

          <tbody>

            {clients.map((client) => (

              <tr
                key={client.id}
                className="border-t"
              >

                <td className="p-4">
                  {client.name}
                </td>

                <td className="p-4">
                  {client.pan}
                </td>

                <td className="p-4">
                  {client.gst}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      client.status === "Active"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {client.status}
                  </span>

                </td>

                <td className="p-4 flex gap-3">

                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  {user?.role === "admin" && (

                    <button
                      onClick={() =>
                        handleDeleteClient(client.id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* MODAL */}

      {showModal && (

        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

          <div className="bg-white p-6 rounded-xl w-full max-w-md">

            <h2 className="text-2xl font-bold mb-4">
              Add Client
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Client Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="pan"
                placeholder="PAN"
                value={formData.pan}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                name="gst"
                placeholder="GSTIN"
                value={formData.gst}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              >
                <option>Active</option>
                <option>Pending</option>
              </select>

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleAddClient}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Save
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Clients;