import React, { useState } from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {

  const navigate = useNavigate();

  const [disable, setDisable] = useState(true)
  const [login, setLogin] = useState(false)
  const [{basket, user}] = useStateValue();
  let sum = 0;

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket.length}{basket.length > 0 ? setDisable(false) : setDisable(true)} items): <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox'/> This order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button disabled={disable} onClick={e => {user ? navigate('/payment') : setLogin(true)}}>Proceed to Checkout</button>
        {login && <p className='notaion'>You should sign in</p>}
    </div>
  )
}

export default Subtotal
