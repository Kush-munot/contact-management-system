import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'
import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import Charts from './Charts/AreaChart'
import TwoDimPieCh from './Charts/TwoDimPieCh'
import PieCh from './Charts/LineChart'
import RadarCh from './Charts/BarCh'


const Dashboard = ({ setIsAuthenticated }) => {
  const [inventory, setInventory] = useState([]);
  const [selectedInventory, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = id => {
    const [item] = inventory.filter(itm => itm.id === id);

    setSelectedEmployee(item);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        axios.delete(`http://localhost:8090/inventory/${id}`).then(() => {
          console.log(result);
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `Data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
          window.location.reload(true);
        })
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            inventory={inventory}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
          <Charts />
          <TwoDimPieCh />
          <PieCh />
          <RadarCh />
        </>
      )}
      {isAdding && (
        <Add
          inventory={inventory}
          setInventory={setInventory}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          inventory={inventory}
          selectedInventory={selectedInventory}
          setInventory={setInventory}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
