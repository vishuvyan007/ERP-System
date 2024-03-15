
import React, { useState } from 'react';
import '../App.css'; 

const Products = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, stockQuantity: 0 });
  const [editMode, setEditMode] = useState(null);

  const handleInputChange = (key, value) => {
    setNewProduct({ ...newProduct, [key]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', category: '', price: 0, stockQuantity: 0 });
  };

  const handleEdit = (productId) => {
    setEditMode(productId);
  };

  const handleSave = (productId) => {
    setEditMode(null);
  };

  const handleInputChangeEdit = (productId, key, value) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, [key]: value } : product
    );
    setProducts(updatedProducts);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="products-container">
      <h1 className="product-heading">PRODUCT MANAGEMENT🚛</h1>
      <ul className="products-list">
        {products.map((product, index) => (
          <li key={index}>
            <div className="product-info">
              {editMode === product.id ? (
                <div>
                  <input
                    type="text"
                    value={product.name}
                    onChange={(e) => handleInputChangeEdit(product.id, 'name', e.target.value)}
                  />
                  <input
                    type="text"
                    value={product.category}
                    onChange={(e) => handleInputChangeEdit(product.id, 'category', e.target.value)}
                  />
                  <input
                    type="number"
                    value={product.price}
                    onChange={(e) => handleInputChangeEdit(product.id, 'price', parseFloat(e.target.value))}
                  />
                  <input
                    type="number"
                    value={product.stockQuantity}
                    onChange={(e) => handleInputChangeEdit(product.id, 'stockQuantity', parseInt(e.target.value))}
                  />
                  <button className="save-button" onClick={() => handleSave(product.id)}>Save</button>
                </div>
              ) : (
                <div>
                 <span>{product.name.toUpperCase()}  ➜  {product.category.toUpperCase()}  ➜<b>PRICE : </b>  ₹{product.price} ➜ <b>STOCKS : </b>{product.stockQuantity} <i>pieces</i></span> 
                  <div className="button-group">
                    <button className="edit-button" onClick={() => handleEdit(product.id)}>EDIT🔁</button>
                    <button className="delete-button" onClick={() => handleDelete(product.id)}>DELETE⛔</button>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="add-product-container">
        <h2 className="add-heading">ADD NEW PRODUCT🆕</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) => handleInputChange('category', e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          value={newProduct.stockQuantity}
          onChange={(e) => handleInputChange('stockQuantity', parseInt(e.target.value))}
        />
        <button className="add-button" onClick={handleAddProduct}>ADD PRODUCT➕</button>
      </div>
    </div>
  );
};

export default Products;
