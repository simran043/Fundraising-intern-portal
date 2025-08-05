import React, { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://fundraising-backend.onrender.com/api/user") // ✅ REPLACE this URL if yours is different
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Intern Dashboard</h1>

      {user ? (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <p><span className="font-semibold">Name:</span> {user.name}</p>
            <p><span className="font-semibold">Referral Code:</span> <code>{user.referralCode}</code></p>
            <p><span className="font-semibold">Total Donations:</span> ₹{user.totalDonations || 0}</p>
          </div>

          {/* Rewards Section */}
          <div className="bg-white p-4 rounded-xl shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">Rewards & Unlockables</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-yellow-100 rounded-lg shadow-sm">
                <p className="font-bold">🎖 Bronze Badge</p>
                <p>Raise ₹1000</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                <p className="font-bold">🏅 Silver Badge</p>
                <p>Raise ₹3000</p>
              </div>
              <div className="p-4 bg-orange-100 rounded-lg shadow-sm">
                <p className="font-bold">🥇 Gold Badge</p>
                <p>Raise ₹5000+</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default Dashboard;
