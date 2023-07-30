import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

const data = [
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
            <h2>Total Quantity Radar Chart</h2>
            <RadarChart
                cx={300}
                cy={250}
                outerRadius={150}
                width={500}
                height={500}
                data={data}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis />
                <Radar
                    name="Mike"
                    dataKey="quantity"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </div>
    );
}
