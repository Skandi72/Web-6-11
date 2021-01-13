import React from 'react';
import data from '../data';
import Herobutton from "./herobutton"
function Herobotton(proos) {
    return   <div className="hero-bottom">
    <div className="hero-itemlist">
    <ul>{
       data.products.map(product=>
      <li>
        <img src="./images/Logo.svg" alt="item"/>
        <h4>{product.name}</h4>
        <a>
         {product.description}
        </a>
      </li>)}
    </ul>
    </div>
    <Herobutton/>
  </div>
}   

export default Herobotton;