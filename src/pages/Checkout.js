import React from 'react'
import '../styles/Checkout.css'
import Subtotal from '../components/Subtotal'
import CheckoutProduct from '../components/CheckoutProduct'
import { useStateValue } from '../StateProvider'

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        {/* <img className='checkout__ad' src={cover} alt=''/> */}
        
        <div>
          <h3>Hello, {user ? user.get('username') : 'Guest'}</h3>
          <h2 className='checkout__title'>
            Your shopping Basket
          </h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title = {item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
