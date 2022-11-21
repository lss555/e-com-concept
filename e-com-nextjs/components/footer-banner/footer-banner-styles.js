import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../../assets/785-logo.png';

export const FooterBannerContainer = styled.div`
	height: 30vh;
	width: 100%;
	display: flex;
	margin-top: 2rem;
	max-width: 1800px;
	margin-right: auto;
	margin-left: auto;
`;

export const LogoImage = styled.img`
	display: flex;
	width: 100%;
	height: 30vh;
	
	object-fit: cover;
	
`;

export const FooterBannerCard = styled.div`
	diplay: flex;
	height: 15vh;
	width: 100%;
	:hover {
		opacity: .6;
	}
`;

export const FooterBannerName = styled.h1`
	display: flex;
	color: white;
	position: absolute;
	margin-left: 2rem;
`;

export const TextContainer = styled.div`
	
`;