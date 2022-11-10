import React from 'react';
import { ProductContainer, ProductLink, ProductCard, ProductCardImage, ProductPrice, ProductName } from './product-styles.js';
import { urlFor } from '../../lib/client';


const Product = ({ product: { image, name, slug, price } }) => {

	return (
		<ProductContainer>
			<ProductLink href={`/product/${slug.current}`}>
				<ProductCard>
					<ProductCardImage src={urlFor(image && image[0])} width={250} height={250} />
					<ProductName>{name}</ProductName>
					<ProductPrice>${price} USD</ProductPrice>
				</ProductCard>
			</ProductLink>
		</ProductContainer>
		)
}

export default Product