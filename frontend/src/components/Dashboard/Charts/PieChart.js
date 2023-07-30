import React from "react";
import { PieChart, Pie } from "recharts";

const data01 = [
    {
        category: "Beverages",
        quantity: 650
    },
    {
        category: "Snacks",
        quantity: 400
    },
    {
        category: "Dairy Products",
        quantity: 300
    },
    {
        category: "Personal Care",
        quantity: 180
    }
];


export default function App() {
    return (
        <div>
            <h2>Total Quantity Pie Chart</h2>
            <PieChart width={1000} height={400}>
                <Pie
                    dataKey="quantity"
                    isAnimationActive={false}
                    data={data01}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />

            </PieChart>
        </div>
    );
}
