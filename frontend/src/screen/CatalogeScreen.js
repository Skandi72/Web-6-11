import React from 'react';
import { Link } from 'react-router-dom';
import CatalogHeader from '../components/catalogheader';
import Item from '../components/item';
import Filter from '../components/filter';
import End from '../components/end';

function CatalogeScreen(props) {
    return <div className="container">
    <CatalogHeader/>
  <div className="hero">
    <Filter/>
    <Item/>
  </div>
  <End/>
</div>
}

export default CatalogeScreen;