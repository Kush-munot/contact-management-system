
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        "itemName": "Maaza",
        "price": 45,
        "quantity": 200
    },
    {
        "itemName": "Coco Cola",
        "price": 55,
        "quantity": 100
    },
    {
        "itemName": "Sting",
        "price": 35,
        "quantity": 10
    },
    {
        "itemName": "Haldiram Khatta Meetha",
        "price": 65,
        "quantity": 50
    },
    {
        "itemName": "Haldiram Bhujiya",
        "price": 65,
        "quantity": 50
    },
    {
        "itemName": "Oreo",
        "price": 125,
        "quantity": 150
    },
    {
        "itemName": "Digestive Biscuits",
        "price": 135,
        "quantity": 50
    },
    {
        "itemName": "Tomato",
        "price": 140,
        "quantity": 50
    },
    {
        "itemName": "Potato",
        "price": 40,
        "quantity": 100
    },
    {
        "itemName": "Sweet Corn",
        "price": 20,
        "quantity": 100
    },
    {
        "itemName": "Baby Corn",
        "price": 50,
        "quantity": 10
    },
    {
        "itemName": "Mother Dairy Full Cream Milk",
        "price": 65,
        "quantity": 100
    },
    {
        "itemName": "Mother Dairy Cow Milk",
        "price": 55,
        "quantity": 100
    },
    {
        "itemName": "Mother Dairy Curd",
        "price": 15,
        "quantity": 50
    },
    {
        "itemName": "Mother Dairy Paneer",
        "price": 65,
        "quantity": 50
    },
    {
        "itemName": "Dettol Soap",
        "price": 65,
        "quantity": 50
    },
    {
        "itemName": "Cinthol Soap",
        "price": 65,
        "quantity": 50
    },
    {
        "itemName": "Vicco Toothpaste",
        "price": 95,
        "quantity": 50
    },
    {
        "itemName": "Axe Deodrant",
        "price": 195,
        "quantity": 30
    },
    {
        "itemName": "Appy Fizz",
        "price": 35,
        "quantity": 100
    }

];

export default function App() {
    return (
        <div>
            <h3>Quantity vs Price Area Chart</h3>
            <AreaChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#000"
                    fill="#FDE5EC"
                    activeDot={{ r: 8 }}
                />
                <Area type="monotone" dataKey="quantity" stroke="#000" fill="#E48586" />
            </AreaChart>
        </div>
    );
}
