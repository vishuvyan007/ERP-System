import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const Dashboard = ({ totalProducts, totalOrders }) => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };

  const goToOrders = () => {
    navigate('/orders');
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-content">
          <h1 className="dashboard-heading">WELCOME TO ADMIN DASHBOARD 📊!!</h1>
          
          <p className="dashp">TOTAL NUMBER OF PRODUCTS 🔎: {totalProducts}</p>
          <p className="dashp">TOTAL NUMBER OF ORDERS 🛒: {totalOrders}</p>
          <button className="dashboard-button" onClick={goToProducts}>PRODUCTS ➡️</button>
          <button className="dashboard-button" onClick={goToOrders}>ORDERS ➡️</button>
        </div>
        <div className="dashboard-image"></div> 
      </div>
    </div>
  );
};

export default Dashboard;
