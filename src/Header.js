import React from 'react';
import './Header.css';
import logo from './header_logo.png';
import SearchIcon from '@material-ui/icons/Search';

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
          <span className="header_optionLineTw">Account</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOn">Returns</span>
          <span className="header_optionLineTw">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOn">Your</span>
          <span className="header_optionLineTw">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
