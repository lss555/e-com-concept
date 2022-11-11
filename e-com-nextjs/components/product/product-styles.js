import styled from 'styled-components';
import Link from 'next/link';

export const ProductContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	overflow: wrap;
	width: auto;
	margin: auto;

`;

export const ProductLink = styled(Link)`
	
	
`;

export const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	flex-wrap: wrap;
	margin: 10px;
	background-color: #313639;
	flex: 1;
	border: 2px solid #313639;
	justify-content: space-evenly;
	:hover {
		transition: all .7s ease;
		transform: scale(1.1);
		border: 2px solid #f12307;
	}
`;

export const ProductCardImage = styled.img`
	object-fit: cover;
	
`;

export const ProductName = styled.p`
	
	margin-left: auto;
    margin-right: auto;
`;

export const ProductPrice = styled.p`
	
	margin-left: auto;
    margin-right: auto;
`;