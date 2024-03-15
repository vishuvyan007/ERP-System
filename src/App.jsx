import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 150, stockQuantity: 200 },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 200, stockQuantity: 300 },
    { id: 4, name: 'Product 4', category: 'Category 4', price: 210, stockQuantity: 500 },
    { id: 5, name: 'Product 2', category: 'Category 1', price: 260, stockQuantity: 409 },
    { id: 6, name: 'Product 3', category: 'Category 1', price: 130, stockQuantity: 250 },
    { id: 7, name: 'Product 5', category: 'Category 1', price: 340, stockQuantity: 101 },
    { id: 8, name: 'Product 2', category: 'Category 2', price: 320, stockQuantity: 120 },
    { id: 9, name: 'Product 3', category: 'Category 2', price: 230, stockQuantity: 205 },
    
    
  ]);

  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Vishu Kumar', orderDate: '2022-03-01', status: 'Ordered' },
    { id: 2, customerName: 'Vinay Kumar', orderDate: '2022-03-02', status: 'Shipped' },
    { id: 3, customerName: 'Roshan Jaiswal', orderDate: '2022-03-03', status: 'Delivered' },
    { id: 4, customerName: 'Rohan Verma', orderDate: '2022-03-03', status: 'Delivered' },
    { id: 5, customerName: 'Payal Verma', orderDate: '2022-03-03', status: 'Delivered' },
    { id: 6, customerName: 'Abhishek Gupta', orderDate: '2022-03-03', status: 'Delivered' },
    { id: 7, customerName: 'Riya Yadav', orderDate: '2022-03-03', status: 'Delivered' },
    { id: 8, customerName: 'Shalni Kumari', orderDate: '2022-03-03', status: 'Delivered' },
    { id: 9, customerName: 'Vivek Kumar', orderDate: '2022-03-03', status: 'Delivered' },
    { id: 10, customerName: 'Shubham Raj', orderDate: '2022-03-03', status: 'Delivered' },
  ]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard totalProducts={products.length} totalOrders={orders.length} />}
        />
        <Route
          path="/products"
          element={<Products products={products} setProducts={setProducts} />}
        />
        <Route
          path="/orders"
          element={<Orders orders={orders} setOrders={setOrders} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
