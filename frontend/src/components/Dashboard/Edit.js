import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'

const Edit = ({ inventory, selectedInventory, setInventory, setIsEditing }) => {
  const [contactName, setContactName] = useState('');
  const [_id, set_id] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [address, SetAddress] = useState('');

  useEffect(() => {
    setContactName(localStorage.getItem('contactName'))
    set_id(localStorage.getItem('_id'))
    setPhoneNumber(localStorage.getItem('phoneNumber'))
    setEmail(localStorage.getItem('email'))
    setCategory(localStorage.getItem('category'))
    SetAddress(localStorage.getItem('address'))
    set_id(localStorage.getItem('_id'))
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!contactName || !phoneNumber || !email || !category || !address) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    axios.patch(`http://localhost:8090/inventory/${_id}`, {
      contactName: contactName,
      phoneNumber: phoneNumber,
      category: category,
      email: email,
      address: address
    }).then((res) => {
      console.log(res)

      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: `Data has been updated.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }).catch((err) => {
      console.log(err)
    })

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `Data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Item</h1>
        <label htmlFor="contactName">Item Name</label>
        <input
          id="contactName"
          type="text"
          name="contactName"
          value={contactName}
          onChange={e => setContactName(e.target.value)}
        />
        <label htmlFor="phoneNumber">Price</label>
        <input
          id="phoneNumber"
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <label htmlFor="vendor">Vendor Name</label>
        <input
          id="vendor"
          type="text"
          name="Vendor Name"
          value={address}
          onChange={e => SetAddress(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
