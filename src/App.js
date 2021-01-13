import './App.css'
import React, { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Orders from './Orders'
import Payment from './Payment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import { Elements } from '@stripe/react-stripe-js'

function App() {
    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            console.log('THE USER IS >>>', authUser)

            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/orders'>
                        <Orders />
                        <Login />
                    </Route>
                    <Route path='/payment'>
                        <Header />
                        <Elements>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/checkout'>
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path='/'>
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
