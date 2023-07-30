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
const data02 = [
    {
        itemName: "Maaza",
        quantity: 200
    },
    {
        itemName: "Coco Cola",
        quantity: 100
    },
    {
        itemName: "Sting",
        quantity: 10
    },
    {
        itemName: "Haldiram Khatta Meetha",
        quantity: 50
    },
    {
        itemName: "Haldiram Bhujiya",
        quantity: 50
    },
    {
        itemName: "Oreo",
        quantity: 150
    },
    {
        itemName: "Digestive Biscuits",
        quantity: 50
    },
    {
        itemName: "Tomato",
        quantity: 50
    },
    {
        itemName: "Potato",
        quantity: 100
    },
    {
        itemName: "Sweet Corn",
        quantity: 100
    },
    {
        itemName: "Baby Corn",
        quantity: 10
    },
    {
        itemName: "Mother Dairy Full Cream Milk",
        quantity: 100
    },
    {
        itemName: "Mother Dairy Cow Milk",
        quantity: 100
    },
    {
        itemName: "Mother Dairy Curd",
        quantity: 50
    },
    {
        itemName: "Mother Dairy Paneer",
        quantity: 50
    },
    {
        itemName: "Dettol Soap",
        quantity: 50
    },
    {
        itemName: "Cinthol Soap",
        quantity: 50
    },
    {
        itemName: "Vicco Toothpaste",
        quantity: 50
    },
    {
        itemName: "Axe Deodrant",
        quantity: 30
    },
    {
        itemName: "Appy Fizz",
        quantity: 100
    }
];

export default function App() {
    return (
        <div>
            <h2>Category vs Quantity Two Level Pie Chart</h2>
            <PieChart width={600} height={400}>
                <Pie
                    data={data01}
                    dataKey="quantity"
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                />
                <Pie
                    data={data02}
                    dataKey="quantity"
                    cx={200}
                    cy={200}
                    innerRadius={90}
                    outerRadius={110}
                    fill="#82ca9d"
                    label
                />
            </PieChart>
        </div>
    );
}
