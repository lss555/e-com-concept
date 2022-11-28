import styled from 'styled-components';
import Link from 'next/link'

export const NavBarContainer = styled.div`
	display: flex;
	color: #f12307;
	height: 50px;
	width: 100%;
	position: absolute;
`;

export const NavBarLogoContainer = styled.p`
	margin-left: 1rem;
	font-size: 1.5rem;
	margin-top: 1rem;
`

export const NavBarLogoLink = styled(Link)`
	
`;

export const NavBarCartIconButton = styled.div`
	display: flex;
	margin: 1rem 1rem auto auto;
	height: 50px;
	width: auto;
	background-color: transparent;
	box-shadow: none;
	text-decoration: none;
	color: #f12307;
	font-size: 1.5rem;
`;

export const CartIconItemQty = styled.span`
	display: flex;
	justify-content: center;
	font-size: 1rem;
	border-radius: 50%;
	background-color: #313639;
	height: 1.3rem;
	width: 1.3rem;
`;