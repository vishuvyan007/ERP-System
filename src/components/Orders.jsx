
import React, { useState } from 'react';
import '../App.css'; 

const Orders = ({ orders, setOrders }) => {
  const [newOrder, setNewOrder] = useState({ id: '', customerName: '', orderDate: '', status: '' });
  const [editMode, setEditMode] = useState(null);

  const handleInputChange = (key, value) => {
    setNewOrder({ ...newOrder, [key]: value });
  };

  const handleAddOrder = () => {
    setOrders([...orders, newOrder]);
    setNewOrder({ id: '', customerName: '', orderDate: '', status: '' });
  };

  const handleEdit = (orderId) => {
    setEditMode(orderId);
  };

  const handleSave = (orderId) => {
    setEditMode(null);
  };

  const handleInputChangeEdit = (orderId, key, value) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, [key]: value } : order
    );
    setOrders(updatedOrders);
  };

  const statusOptions = ['Ordered', 'Shipped', 'Delivered', 'Cancelled'];

  const handleDelete = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-container">
      <h1 className='order-heading'>ORDER MANAGEMENT 🛒</h1>
      <ul className="orders-list">
        {orders.map((order, index) => (
          <li key={index}>
            {editMode === order.id ? (
              <div>
                CUSTOMER: {order.customerName}
                <input
                  type="date"
                  value={order.orderDate}
                  onChange={(e) => handleInputChangeEdit(order.id, 'orderDate', e.target.value)}
                />
                <select
                  value={order.status}
                  onChange={(e) => handleInputChangeEdit(order.id, 'status', e.target.value)}
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <button className="edit-button" onClick={() => handleSave(order.id)}>Save</button>
              </div>
            ) : (
              <div>
                <span className="order-info"><b>ORDER ID:</b> <i>{order.id}</i> ➜ <b>CUSTOMER :</b> <i>{order.customerName}</i> ➜ <b>DATE :</b> <i>{order.orderDate} </i> ➜ STATUS :<i>{order.status}</i> </span>
                <div className="button-group">
                  <button className="edit-button" onClick={() => handleEdit(order.id)}>EDIT 🔁</button>
                  <button className="delete-button" onClick={() => handleDelete(order.id)}>DELETE ⛔</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="add-order-container">
        <h2 className='add-heading'>ADD NEW ORDER 🆕</h2>
        <input
          type="text"
          placeholder="Order ID"
          value={newOrder.id}
          onChange={(e) => handleInputChange('id', e.target.value)}
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={newOrder.customerName}
          onChange={(e) => handleInputChange('customerName', e.target.value)}
        />
        <input
          type="date"
          placeholder="Order Date"
          value={newOrder.orderDate}
          onChange={(e) => handleInputChange('orderDate', e.target.value)}
        />
        <select
          value={newOrder.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
        >
          <option value="">Select Status</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button className="add-button" onClick={handleAddOrder}>ADD ORDER ➕</button>
      </div>
    </div>
  );
};

export default Orders;
