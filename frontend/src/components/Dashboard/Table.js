import React, { useEffect, useState } from 'react';
import axios from "axios";

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const getMyPostData = async () => {
    try {
      const res = await axios.get("http://localhost:8090/inventory");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  const setDataToStorage = (_id, itemName, price, quantity, category, vendorName) => {
    localStorage.setItem("itemName", itemName);
    localStorage.setItem("_id", _id);
    localStorage.setItem("price", price);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("category", category);
    localStorage.setItem("vendorName", vendorName);
  }

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Vendor Name</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {myData.length > 0 ? (
            myData.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.itemName}</td>
                <td>{employee.price}</td>
                <td>{employee.quantity}</td>
                <td>{employee.category}</td>
                <td>{employee.vendorName} </td>
                <td className="text-right">
                  <button
                    onClick={() => { setDataToStorage(employee._id, employee.itemName, employee.price, employee.quantity, employee.category, employee.vendorName); handleEdit(employee.id) }}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee._id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
