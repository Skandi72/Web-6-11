import React from 'react';
import data from '../data';
function Item(proos) {
    return   <div className="hero-bottom">
    <div className="catalog-item">
    <ul>{
        data.products.map(product=>
      <li>
        <div className="item-container">
            <div className="header-item">
                <a>Item {product._id}</a>
            </div>
            <div>
                <img src={product.image} className="item-img" alt="logo"/>
            </div>
            <div className="item-text">
                <h3>{product.name}</h3>
                <div className="item-decription">
                    <a>{product.description}</a>
                </div>
            </div>
            <div className="item-price">
                Price: 
                <div className="money">
                   {product.price}$
                </div>
            </div>
            <div className='item-button'>
                <button>View more</button>
            </div>
        </div>
      </li>)}
    </ul>
    </div>
  </div>
}   

export default Item;