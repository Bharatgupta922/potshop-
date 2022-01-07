import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";
import FlipMove from 'react-flip-move';
function Checkout() {

const [{basket , user} , dispatch] = useStateValue();

    return (
<div className="checkout">
        <div className="checkout__left">
         <div>
         <Subtotal />
           <h3>Hello , {user? user.email : 'Guest'}</h3>
        <h2 className="checkout__title">Your Shoping Basket_________________________________________________________________________________________________</h2>  
        {/* <FlipMove duration={750} easing="ease-out"> */}
        {basket.map(item =>(
          <CheckoutProduct 
          id = {item.id}  
          title = {item.title}
          image = {item.image}
          price = {item.price}
          rating = {item.rating}
          />
        ))}
        {/* </FlipMove> */}
       
        </div>
        </div>
        
        <div className="checkout__right">
        
        </div>
    </div>
    );
}


export default Checkout;