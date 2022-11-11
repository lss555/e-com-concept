import styled from 'styled-components';
import Link from 'next/link';

export const HeroBannerContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	margin: auto;
`;

export const TextContainer = styled.div`
	display: flex;
	width: auto;
	height: 15vh;
	align-items: flex-start;
	color: red;
	flex-direction: column;
	margin-top: 40vh;
	margin-left: 2rem;
	background-color: rgba(128, 128, 128, 0.2);
	padding: 0 .4rem .4rem .4rem;
	border-radius: 5px;
	
`;

export const SmallHeroText = styled.p`
	font-weight: bold;
	font-size: 1.5rem;
	
	color: #f12307;
	
	
`;

export const MidHeroText = styled.h3`
	margin: 0;
	margin-bottom: 1rem;
	color: black;
`;

export const HeroImg = styled.img`
	display: flex;
	width: 100%;
	height: 60vh;
	object-fit: cover;
	position: absolute;
	z-index: -1;
`;

export const HeroLink = styled(Link)`
	position: absolute;
	margin-right: 48%;
	margin-left: 48%;
`;

export const HeroButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border: 2px solid #f12307;
	margin-top: 30vh;
	background-color: black;
	height: 40px;
	width: 100px;
	border-radius: 5px;
	opacity: .8;
	:hover {
		opacity: 1;
		color: #f12307;
		transition: all .7s ease;
		transform: scale(1.1);
	}
`;

export const HeroDescHeader = styled.h5`
	font-size: 1.5rem;
	margin: 0 1rem 0 1rem;
	padding: 0;
	width: 50%;
`;

export const HeroDesc = styled.p`
	margin: 1rem 1rem 0 1rem;
	width: 50%;
	padding: 0;
	color: white;
`;

export const DescContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rgba(128, 128, 128, 0.5);
	padding: .4rem 0 1rem 0;
	border-radius: 5px;
	align-items: center;
	justify-content: flex-end;
	text-align: flex-end;
	margin-top: 40vh;
	margin-right: 2rem;
	margin-left: auto;
	width: 20%;
	color: #f12307;
	display: none;
`;

export const HeroButtonContainer = styled.div`
	margin-right: auto;
	margin-left: auto;
	height: 100%;
	width: 100%;
	
`;

export const MarqueeContainer = styled.div`
	display: flex;
	height: 50px;
	width: 100%;
	margin-top: 60vh;
	background-color: #f12307;
	color: black;
	position: absolute;
	:hover {
		cursor: pointer;
	}
`;

export const MarqueeText = styled.h3`
	margin-left: 1.5rem;
	margin-right: 1.5rem;
	letter-spacing: .6px;
	font-weight: bold;
`;

export const ArrowIconContainer = styled.div`
	
	
	
`;