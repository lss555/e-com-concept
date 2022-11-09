import React from 'react';
import { HeroBannerContainer, TextContainer, SmallHeroText, MidHeroText, HeroImg, HeroLink, HeroButton, HeroDesc, HeroDescHeader, DescContainer, HeroButtonContainer } from './hero-banner-styles.js';
import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {

	return (
		<HeroBannerContainer>
			<TextContainer>
				<SmallHeroText>{heroBanner.smallText}</SmallHeroText>
				<MidHeroText>{heroBanner.midText}</MidHeroText>
				<MidHeroText>{heroBanner.largeText1}</MidHeroText>
			</TextContainer>
			
			<DescContainer>
				<HeroDescHeader>Description</HeroDescHeader>
				<HeroDesc>{heroBanner.desc}</HeroDesc>
			</DescContainer>

			<HeroImg src={urlFor(heroBanner.image)}/>
			<HeroLink href={`/product/${heroBanner.product}`}>
				<HeroButtonContainer>
					<HeroButton>{heroBanner.buttonText}</HeroButton>
				</HeroButtonContainer>
			</HeroLink>
		</HeroBannerContainer>
		)
}

export default HeroBanner;