import React from 'react'
import './Subtotal.css'
import CurrentFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue()
  console.log(basket)
  return (
    <div className='subtotal'>
      <CurrentFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):{' '}
              <strong>{basket.reduce((tot, arr) => tot + arr.price, 0)}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
