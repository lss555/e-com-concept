import styled from 'styled-components';

export const HomeContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
	color: #f12307;
`;

export const BestSellerContainer = styled.div`
	margin-top: 15vh;
`;

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: row;
	overflow: wrap;
	flex-wrap: wrap;
	max-width: 1800px;
	margin-right: auto;
	margin-left: auto;
`;

export const PopularHeader = styled.h2`
	font-size: 2.5rem;
	border-bottom: 2px solid #313639;
	padding-bottom: 3px;
	width: 20%;
	margin: auto auto 1.5rem auto;
	@media screen and (max-width: 900px) {
    margin-top: 2rem;
    width: 80%;
  }
`;

export const HeaderContainer = styled.div`
	width: 100%;
`;