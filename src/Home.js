import React from 'react';
import './styles/Home.css';
import Product from './components/Product';
import cover from './images/bag01.png';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        {/* <img className='home__image' src={bg} alt=''/> */}

        <div className='home__row'>
          <Product 
          id={1}
          title='the best product in out shop buy it, buy buy buy byu buy'
          price={19.99}
          rating={3}
          image={cover}/>
          <Product 
          id={2}
          title='the best product in out shop buy it, buy buy buy byu buy'
          price={30}
          rating={2}
          image={cover}/>
        </div>

        <div className='home__row'>
          <Product 
          id={3}
          title='the best product in out shop buy it, buy buy buy byu buy'
          price={25}
          rating={4}
          image={cover}/>
          <Product 
          id={4}
          title='the best product in out shop buy it, buy buy buy byu buy'
          price={19.99}
          rating={1}
          image={cover}/>
          <Product 
          id={5}
          title='the best product in out shop buy it, buy buy buy byu buy'
          price={15}
          rating={3}
          image={cover}/>
        </div>

        <div className='home__row'>
          <Product 
          id={6}
          title='the best product in out shop buy it, buy buy buy byu buy'
          price={1000}
          rating={5}
          image={cover}/>
        </div>
      </div>
    </div>
  )
}

export default Home
