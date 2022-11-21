import React from 'react';
import { HomeContainer, BestSellerContainer, ProductContainer, PopularHeader, HeaderContainer } from './styles-index.js';
import { Cart, Footer, FooterBanner, HeroBanner, Layout, NavBar, Product } from '../components';
import { client } from '../lib/client';

const index = ({ products, bannerData, footerBannerData }) => {

  return (
    <HomeContainer>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} products={products}/>
      <BestSellerContainer>
        <HeaderContainer>
          <PopularHeader>Popular</PopularHeader>
        </HeaderContainer>

        <ProductContainer>
          {products?.map((product) => <Product key={product._id} product={product}/>)}
        </ProductContainer>
      </BestSellerContainer>
      {footerBannerData?.map((footerBannerData) => <FooterBanner key={footerBannerData._id} footerBanner={footerBannerData} />)}
      
    </HomeContainer>
    );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const footerBannerQuery = '*[_type == "category" && highlight]';
  const footerBannerData = await client.fetch(footerBannerQuery);

  return {
    props: { products, bannerData, footerBannerData }
  }
}

export default index;