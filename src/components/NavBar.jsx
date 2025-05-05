import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const NavBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <nav className="navBar">
      <Link to="/" className="Link"> <HomeRoundedIcon /> <span>Home</span> </Link>
      <input 
        type="text" 
        placeholder="Search products..." 
        className="searchBar"
        value={searchText}
        onChange={handleInputChange}
      />
      <Link to="/cart" className="Link"> <AddShoppingCartRoundedIcon /> <span>Cart</span> </Link>
    </nav>
  );
};

export default NavBar;