import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Herostart from '../components/herostart';
import Herobotton from '../components/herobottom';
import End from '../components/end';

function HomeScreen(props) {
    return <div className="container">
    <Header/>
  <div className="hero">
    <Herostart/>  
    <Herobotton/>
  </div>
  <End/>
</div>
}

export default HomeScreen;