import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import FlipMove from 'react-flip-move'

function Payment() {
    const [{ basket, user }] = useStateValue()

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout ({' '}
                    <Link to='/checkout'>{basket?.length} items</Link> )
                </h1>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>1738 sk. No:128</p>
                        <p>Karsiyaka / Izmir</p>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        <FlipMove>
                            {basket.map((item, index) => (
                                <CheckoutProduct
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </FlipMove>
                    </div>
                </div>
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details'> </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
