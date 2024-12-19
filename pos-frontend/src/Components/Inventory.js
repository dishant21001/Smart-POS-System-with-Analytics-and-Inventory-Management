import React, { useState } from 'react';
import './Inventory.css';

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Product A', stock: 10 },
    { id: 2, name: 'Product B', stock: 5 },
  ]);

  const updateStock = (id, newStock) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, stock: newStock } : item
      )
    );
  };

  return (
    <div className="inventory">
      <h2>Inventory Management</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>
                <input
                  type="number"
                  min="0"
                  value={item.stock}
                  onChange={(e) => updateStock(item.id, Number(e.target.value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
