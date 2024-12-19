import React, { useState } from 'react';
import './SalesInterface.css';

const SalesInterface = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handlePayment = () => {
    console.log('Processing Payment...');
    // Payment logic here
  };

  return (
    <div className="sales-interface">
      <h2>Sales Interface</h2>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-list">
        {products
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div key={product.id}>
              <p>{product.name} - ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
      </div>
      <div className="cart">
        <h3>Cart</h3>
        {cart.map((item, index) => (
          <p key={index}>
            {item.name} - ${item.price}
          </p>
        ))}
        <p>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</p>
        <button onClick={handlePayment}>Checkout</button>
      </div>
    </div>
  );
};

export default SalesInterface;
