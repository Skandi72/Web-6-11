import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import CatalogeScreen from './screen/CatalogeScreen';
import CartScreen from './screen/CartScreen'
import data from './data';
function App() {
  return (
  <BrowserRouter>
         <Route path="/" exact={true} component={HomeScreen} />
         <Route path="/catalog"  component={CatalogeScreen} />
         <Route path="/cart"  component={CartScreen} />
  </BrowserRouter>
  );
}

export default App;
