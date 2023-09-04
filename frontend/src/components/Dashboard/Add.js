import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'

/* Swal.fire({
  icon: 'success',
  title: 'Added!',
  text: `Data has been Added.`,
  showConfirmButton: false,
  timer: 1500,
});
 */

const Add = ({ inventory, setInventory, setIsAdding }) => {
  const [contactName, setContactName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)
  const [email, setEmail] = useState(0)
  const [address, setAddress] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8090/inventory', {
      contactName,
      phoneNumber,
      email,
      category,
      address
    }).then((res) => {
      console.log(res)
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `Data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleSubmit}>
        <h1>Add Item</h1>
        <label htmlFor="contactName">Contact Name</label>
        <input
          id="contactName"
          type="text"
          name="contactName"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="vendor">Address</label>
        <input
          id="vendor"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
