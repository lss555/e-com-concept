import React from 'react'
import { SlugContainer, ProductDetailContainer, ProductImageContainer, ProductImage, ProductsImageCarousel, SmallCarouselImage, ProductDetailsDescription, ProductName, ProductPrice, AddRemoveFromCartContainer, AmountInCart, AddToCart, RemoveFromCart, AddToCartButton } from './slug-styles.js'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

// small image carousel
// <ProductsImageCarousel>
// 				{image?.map((item, index) => (
// 					<SmallCarouselImage src={urlFor(item)} onMouseEnter=""/>
// 					))}
// 			</ProductsImageCarousel>


const ProductDetails = ({ product, products }) => {
	const { image, name, details, price } = product;

	return (
		<SlugContainer>
			<ProductImageContainer>
				<ProductImage src={urlFor(image && image[0])} />
			</ProductImageContainer>
			<ProductDetailsDescription>
				<ProductName>{name}</ProductName>
				<ProductDetailsDescription>{details}</ProductDetailsDescription>
				<ProductPrice>${price}</ProductPrice>
				<AddRemoveFromCartContainer>
					<AddToCart><AiOutlineMinus /></AddToCart>
					<AmountInCart>0</AmountInCart>
					<RemoveFromCart><AiOutlinePlus /></RemoveFromCart>
				</AddRemoveFromCartContainer>
				<AddToCartButton>Add To Cart</AddToCartButton>
			</ProductDetailsDescription>

		</SlugContainer>
		);
}

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
		slug {
			current
		}
	}
	`;
		const products = await client.fetch(query);

		const paths = products.map((product) => ({
			params: { 
				slug: product.slug.current
			}
		}));

		return {
			paths,
			fallback: 'blocking'
		}
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: { products, product }
  }
}

export default ProductDetails