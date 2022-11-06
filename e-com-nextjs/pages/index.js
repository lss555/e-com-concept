import React from 'react';
import { HomeContainer } from './styles-index.js';
import { Cart, Footer, FooterBanner, HeroBanner, Layout, NavBar, Product } from '../components';

const index = () => {

  return (
    <HomeContainer>
      <HeroBanner />

      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner />
    </HomeContainer>
    )
}

export default index;