import React, { useState } from "react";

const SearchBar = () => {

  const [personData , setPersonData] = useState('');
  
  const searchResult = (event) => {
  
  }

  return (
    <div>
      <input type='text' onChange={searchResult} name="Search" placeholder="Search" />
    </div>
  );
}

export default SearchBar;