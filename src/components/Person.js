import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiGet } from "../utils/api";

function Person() {
  const { id } = useParams();          // param z URL (napr. /people/3)
  const navigate = useNavigate();      // na návrat späť
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchPerson() {
      const data = await apiGet(`people/${id}`);
      setPerson(data);                 // uložíme údaje postavy do stavu
    }
    fetchPerson();
  }, [id]);                            // znova vykoná pri zmene id

  if (!person) return <p>Načítavam...</p>;

  return (
    <div>
      <h1>{person.name}</h1>
      <p>Výška: {person.height}</p>
      <p>Váha: {person.mass}</p>
      <p>Farba očí: {person.eye_color}</p>
      <button onClick={() => navigate(-1)}>Späť</button>
    </div>
  );
}

export default Person;