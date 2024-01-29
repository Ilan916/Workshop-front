import React, { useState } from "react";
import axios from "axios";

const SearchGps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/product/getProductStoresNearby/${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la recherche des magasins :",
        error.message
      );
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h2 className="text-2xl mb-4">Recherche de magasins à proximité</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 flex-1"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Rechercher
        </button>
      </div>

      <ul className="mt-4">
        {searchResults.map((store, index) => (
          <li key={index} className="mb-2">
            <strong>{store.name}</strong>
            <p className="text-gray-500">{store.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchGps;
