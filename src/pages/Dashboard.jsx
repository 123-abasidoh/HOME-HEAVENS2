// src/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Welcome to your Dashboard</h2>
                <p>This is a protected route.</p>
            </div>
        </div>
    );
};

export default Dashboard;
