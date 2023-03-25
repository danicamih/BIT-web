import React, { useState } from 'react';
// import axios from 'axios';

const API_KEY = 'fhk09kIzdcdkE1As0C19iNdYXMShk8ue';

// function searchGifs(searchTerm) {
//   const apiKey = 'fhk09kIzdcdkE1As0C19iNdYXMShk8ue';
//   const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;
//   return axios.get(apiUrl);
// }


function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchQuery)}&api_key=${API_KEY}`);
    const data = await response.json();
    setGifs(data.data);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  );
}

export default Search;
