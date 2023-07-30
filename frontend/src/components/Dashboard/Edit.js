import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios'

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const [itemName, setItemName] = useState('');
  const [_id, set_id] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [vendorName, setVendorName] = useState('');

  useEffect(() => {
    setItemName(localStorage.getItem('itemName'))
    set_id(localStorage.getItem('_id'))
    setPrice(localStorage.getItem('price'))
    setQuantity(localStorage.getItem('quantity'))
    setCategory(localStorage.getItem('category'))
    setVendorName(localStorage.getItem('vendorName'))
    set_id(localStorage.getItem('_id'))
  }, [])

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!itemName || !price || !quantity || !category || !vendorName) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    axios.patch(`http://localhost:8090/inventory/${_id}`, {
      itemName: itemName,
      price: price,
      category: category,
      quantity: quantity,
      vendorName: vendorName
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
        <label htmlFor="itemName">Item Name</label>
        <input
          id="itemName"
          type="text"
          name="itemName"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
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
          value={vendorName}
          onChange={e => setVendorName(e.target.value)}
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
