import React from 'react';
import { HeroBannerContainer, TextContainer, SmallHeroText, MidHeroText, HeroImg, HeroLink, HeroButton, HeroDesc, HeroDescHeader } from './hero-banner-styles.js';
import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {

	return (
		<HeroBannerContainer>
			<TextContainer>
				<SmallHeroText>{heroBanner.smallText}</SmallHeroText>
				<MidHeroText>{heroBanner.midText}</MidHeroText>
				<h1>{heroBanner.largeText1}</h1>
			</TextContainer>
			<HeroLink href={`/product/${heroBanner.product}`}>
				<HeroButton>{heroBanner.buttonText}</HeroButton>
			</HeroLink>
			<HeroDescHeader>description</HeroDescHeader>
			<HeroDesc>{heroBanner.desc}</HeroDesc>
			<HeroImg src={urlFor(heroBanner.image)}/>
		</HeroBannerContainer>
		)
}

export default HeroBanner;