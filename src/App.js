import React, { useState } from 'react';

function SpellList() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSpells = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://hp-api.onrender.com/api/spells');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSpells(data);
    } catch (err) {
      setError('Failed to load spells. Please try again later.');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Harry Potter Spells</h1>
      <button onClick={fetchSpells}>Load Spells</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {spells.map((spell, index) => (
          <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
            <h3>{spell.name}</h3>
            <p>{spell.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpellList;