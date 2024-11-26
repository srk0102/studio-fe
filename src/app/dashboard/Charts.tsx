"use client";

import React from "react";

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,
    Legend,
    ResponsiveContainer,
} from "recharts";

const lineChartData = [
    { name: "Jan", Sales: 400, Expenses: 240 },
    { name: "Feb", Sales: 300, Expenses: 139 },
    { name: "Mar", Sales: 200, Expenses: 980 },
    { name: "Apr", Sales: 278, Expenses: 390 },
    { name: "May", Sales: 189, Expenses: 480 },
];

const barChartData = [
    { name: "Jan", Sales: 300, Revenue: 600 },
    { name: "Feb", Sales: 200, Revenue: 500 },
    { name: "Mar", Sales: 150, Revenue: 400 },
    { name: "Apr", Sales: 278, Revenue: 390 },
    { name: "May", Sales: 189, Revenue: 480 },
];

const Charts = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Line Chart */}
            <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
                <h2 className="font-bold text-lg mb-4">Sales vs Expenses</h2>
                <div className="w-full h-64">
                    <ResponsiveContainer>
                        <LineChart data={lineChartData}>
                            <Line type="monotone" dataKey="Sales" stroke="#8884d8" />
                            <Line type="monotone" dataKey="Expenses" stroke="#82ca9d" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bar Chart */}
            <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
                <h2 className="font-bold text-lg mb-4">Sales and Revenue</h2>
                <div className="w-full h-64">
                    <ResponsiveContainer>
                        <BarChart data={barChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Sales" fill="#8884d8" />
                            <Bar dataKey="Revenue" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Charts;
