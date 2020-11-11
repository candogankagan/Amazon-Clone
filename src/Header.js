import React from 'react';
import './Header.css';
import logo from './header_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={logo} />
      <div className="header_search">
        <input type="text" className="header_searchIn" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOn">Hello, Sign in </span>
          <span className="header_optionLineTwo">Account</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOn">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingCartIcon />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
