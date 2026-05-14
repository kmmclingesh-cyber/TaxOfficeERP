function Dashboard() {
  const cards = [
    {
      title: "Total Clients",
      value: 120,
    },
    {
      title: "Pending Tasks",
      value: 18,
    },
    {
      title: "Open Notices",
      value: 7,
    },
    {
      title: "Litigation Cases",
      value: 3,
    },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-gray-500 text-lg">
              {card.title}
            </h2>

            <p className="text-4xl font-bold mt-4 text-blue-600">
              {card.value}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Dashboard;