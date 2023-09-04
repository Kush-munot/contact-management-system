import React, { useEffect, useState } from 'react';
import axios from "axios";
import Charts from './Charts/AreaChart';


const Table = ({ inventory, handleEdit, handleDelete }) => {
  inventory.forEach((itm, i) => {
    itm.id = i + 1;
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

  const setDataToStorage = (_id, contactName, phoneNumber, email, category, address) => {
    localStorage.setItem("contactName", contactName);
    localStorage.setItem("_id", _id);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("category", category);
    localStorage.setItem("address", address);
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
            <th>Contact Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Category</th>
            <th>Address</th>
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
                <td>{employee.contactName}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.email}</td>
                <td>{employee.category}</td>
                <td>{employee.address} </td>
                <td className="text-right">
                  <button
                    onClick={() => { setDataToStorage(employee._id, employee.contactName, employee.phoneNumber, employee.email, employee.category, employee.address); handleEdit(employee.id) }}
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
              <td colSpan={7}>No Items</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
