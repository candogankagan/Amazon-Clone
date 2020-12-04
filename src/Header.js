import React from 'react'
import './Header.css'
import logo from './header_logo.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header_logo' src={logo} />
      </Link>
      <div className='header_search'>
        <input type='text' className='header_searchIn' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <Link to='/login'>
          <div className='header_option'>
            <span className='header_optionLineOn'>Hello, Sign in </span>
            <span className='header_optionLineTwo'>Account</span>
          </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLineOn'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>
        <Link to='/checkout'>
          <div className='header_optionBasket'>
            <ShoppingCartIcon />
            <span className='header_optionLineTwo header_basketCount'>
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
