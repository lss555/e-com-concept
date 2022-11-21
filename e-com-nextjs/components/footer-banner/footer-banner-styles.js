import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../../assets/785-logo.png';

export const FooterBannerContainer = styled.div`
	height: 30vh;
	width: 100%;
	display: flex;
	margin: 2rem auto auto auto;
	max-width: 1800px;
	
`;

export const LogoImage = styled.img`
	display: flex;
	width: 100%;
	height: 30vh;
	object-fit: cover;
	
`;

export const FooterBannerCard = styled.div`
	
	height: 30vh;
	width: 100%;
	:hover {
		opacity: 1;
	}
`;

export const FooterBannerName = styled.h1`
	display: flex;
	flex-direction: column;
	color: white;
	position: absolute;
	margin-left: 2rem;
`;

export const TextContainer = styled.div`
	display:
	flex-direction: column;
	height: auto;
	width: 100%;
	margin: auto;
`;

export const FooterBannerButton = styled.button`
	display: flex;
	flex-direction: column;
	position: absolute;
	margin: 6rem auto auto 2rem;
	padding: .8rem;
	font-size: 1rem;
	background-color: black;
	opacity: .8;
	border: 2px solid #f12307;
	border-radius: 5px;
	color: white;

	:hover {
		opacity: 1;
		color: #f12307;
		transition: all .7s ease;
		transform: scale(1.1);
	}
`;

export const FooterBannerButtonContainer = styled.div`
	
`;