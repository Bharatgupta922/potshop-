import './App.css';
import React , {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import {auth} from "./firebase";
import Orders from "./Orders";
import {useStateValue} from "./StateProvider";
import Footer from "./Footer";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51IvaYNSH3tCCCxyJ54hyKz9bsHW8e6AuOCTvYsC9MBum1KFK9EOxivqusP6eolEM4GPFe6g69HPPcmAUFigmCrtY00Il17PM8c");

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    // run only once when app components loads 
    auth.onAuthStateChanged(authUser =>{
      console.log("USER_IS >>>" , authUser);
      if(authUser){
        //user just loggin in 
        dispatch({
          type:'SET_USER',
          user : authUser
        })
      }
      else {
        // user just logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, []);
  return (
    <Router>
<div className="app">
<Switch>
<Route path = "/orders">
<Header />
<Orders />
  </Route>
<Route path = "/login">
<Login />
  </Route>
<Route path = "/checkout">
<Header />
<Checkout />
  </Route>
  <Route path = "/payment">
<Header />
<Elements stripe = {promise}>
<Payment />
</Elements>
  </Route>
  <Route path = "/">
  <Header />
    <Home />
  </Route>
  <Footer />
</Switch>
</div>
    </Router>
  );
}

export default App;
