import React, { useState, useEffect } from 'react';
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
  const [itemName, setItemName] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [vendorName, setVendorName] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8090/inventory', {
      itemName,
      price,
      quantity,
      category,
      vendorName
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
        <label htmlFor="itemName">Item Name</label>
        <input
          id="itemName"
          type="text"
          name="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="vendor">Vendor Name</label>
        <input
          id="vendor"
          type="text"
          name="vendorName"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
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
