import React from 'react';
import { Link } from 'react-router-dom';
function CatalogHeader(proos) {
    return <header>
    <div className="logo header">
        <img src="./images/Logo.svg" className="logo-img" alt="logo"/>
    </div>
    <div className="header-list">
        <ul>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
          <Link to='/catalog'>Catalog</Link>
          </li>
          <li>
          <Link to='/cart'>Cart</Link>
          </li>
        </ul>
    </div>
    <div>
        <input className="catalog-search"></input>
    </div>
</header>
}   

export default CatalogHeader;