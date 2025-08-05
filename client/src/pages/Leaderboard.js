import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Static dummy data
    setLeaderboard([
      { name: "Aman", donations: 6000 },
      { name: "Simran", donations: 5000 },
      { name: "Priya", donations: 4500 },
      { name: "Neha", donations: 3000 },
      { name: "Rohit", donations: 2500 }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3">Rank</th>
              <th className="p-3">Intern Name</th>
              <th className="p-3">Donations Raised</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 font-semibold">#{index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">₹{user.donations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
