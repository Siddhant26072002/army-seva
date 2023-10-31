import React, { useState } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import Button from "react-bootstrap/Button"; 
import Card from "react-bootstrap/Card"; 
import { loadStripe } from "@stripe/stripe-js"; 
// import { useGlobalContext } from "../context/context";

function StripePayment() { 
    
    const [product, setProduct] = useState({ 
        name: "Army-Seva", 
        price: 0, 
        productOwner: "Army-Seva", 
        description: "Thank you for considering a donation to our NGO, which provides vital support to disabled veterans, war widows, army childcare, and their families. ",
        quantity: 1, 
      }); 
      const makePayment = async () => { 
        const stripe = await loadStripe("pk_test_51McbTGSJJrDeHsxRxiSCZKBZBfHRsAWgLtPzhT2Gqk2SY4gmShmbEZav8hGlxGR0qoJ38pSYYYtDezotnAX3aHVH00xMsE7hCR"); 
        const body = { product }; 
        const headers = { 
          "Content-Type": "application/json", 
        }; 
     
        const response = await fetch( 
          "http://localhost:5000/api/pay/create-checkout-session", 
          { 
            method: "POST", 
            headers: headers, 
            body: JSON.stringify(body), 
          } 
        ); 
     
        const session = await response.json(); 
     
        const result = stripe.redirectToCheckout({ 
          sessionId: session.id, 
        }); 
     
        if (result.error) { 
          console.log(result.error); 
        } 
      }; 



      return ( 
<div class="donation">
  {/* <img class="donation-img" src="https://www.rti.org/sites/default/files/center-hero-images/istock-1273601403_2500.jpg" alt="Donation Image" /> */}
<div className="donation-body">
    <h1>{product.name}</h1>
    <p className="desc">{product.description}</p>
            <input type="number" onChange={(e) => setProduct({
                ...product,
                price : e.target.value
              })
            } value={product.price} ></input>   
             <button onclick="makePayment()">Donate Rs. {product.price}</button>

</div>
</div>
      ); 

    } 

export default StripePayment; 