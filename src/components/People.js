import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Pomocná funkcia na získanie dát
async function apiGet(endpoint) {
  const response = await fetch(`https://hp-api.onrender.com/api/spells/${endpoint}`);
  return await response.json();
}

function People() {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    async function fetchPeople() {
      const data = await apiGet("name");
      setPeople(data.results);
    }
    fetchPeople();
  }, []);

  if (!people) return <p>Načítavam...</p>;

  return (
    <div>
      <h1>Postavy</h1>
      {people.map((person, index) => (
        <div key={index}>
          <h2>
            <Link to={`/people/${index + 1}`}>{person.name}</Link>
          </h2>
          <p>Výška: {person.height}</p>
          <p>Váha: {person.mass}</p>
        </div>
      ))}
    </div>
  );
}

export default People;