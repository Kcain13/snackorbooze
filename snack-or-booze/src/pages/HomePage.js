import React, { useState, useEffect } from 'react';
import SnackOrBoozeApi from '../utils/Api';

function HomePage() {
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const fetchedSnacks = await SnackOrBoozeApi.getItems('snacks');
        const fetchedDrinks = await SnackOrBoozeApi.getItems('drinks');
        setSnacks(fetchedSnacks);
        setDrinks(fetchedDrinks);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    }
    fetchItems();
  }, []);

  // Handle clicking an item to show its details
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="menu-container">
      <h1>Welcome to Snack or Booze</h1>
      <div className="menu-grid">
        {/* Snacks column */}
        <div className="menu-column">
          <h2>Snacks</h2>
          {snacks.map(snack => (
            <div key={snack.id} className="menu-item" onClick={() => handleItemClick(snack)}>
              {snack.name}
            </div>
          ))}
        </div>

        {/* Drinks column */}
        <div className="menu-column">
          <h2>Drinks</h2>
          {drinks.map(drink => (
            <div key={drink.id} className="menu-item" onClick={() => handleItemClick(drink)}>
              {drink.name}
            </div>
          ))}
        </div>
      </div>

      {/* Item description popup */}
      {selectedItem && (
        <div className="item-description">
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
