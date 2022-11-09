import React from 'react';
import { HomeContainer, BestSellerContainer } from './styles-index.js';
import { Cart, Footer, FooterBanner, HeroBanner, Layout, NavBar, Product } from '../components';
import { client } from '../lib/client';

const index = ({ products, bannerData }) => {

  return (
    <HomeContainer>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <BestSellerContainer>
        <div>
          <h2>Best Selling Products</h2>
          <p>Stuff of many variations</p>
        </div>

        <div>
          {products?.map((product) => product.name)}
        </div>
      </BestSellerContainer>
      <FooterBanner />
    </HomeContainer>
    );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default index;