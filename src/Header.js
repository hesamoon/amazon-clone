import React from 'react'
import './styles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import Parse from 'parse/dist/parse.min.js';

function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = async () => {
    if(user){
        try {
          await Parse.User.logOut();

          dispatch({
            type: 'SET_USER',
            user: null,
          })
          return true;
        } catch (error) {
          alert(`Error! ${error.message}`);
          return false;
        }
    }
  }

  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
      </Link>
      
      <div className='header__search'>
        <input className='header__searchInput' type='text'/>
        <SearchIcon className='header__searchIcon'/>
      </div>
      
      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div className='header__option' onClick={handleAuthentication}>
            <span className='header__optionLineOne'>Hello {user ? user.get('username') : 'Guest'}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>

        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
      </div>

      <Link to='/checkout'>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon className=''/>
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
      </Link>
    </div>
  )
}

export default Header
