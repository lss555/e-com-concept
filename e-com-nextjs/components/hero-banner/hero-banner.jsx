import React from 'react';
import { HeroBannerContainer, TextContainer, SmallHeroText, MidHeroText, HeroImg, HeroLink, HeroButton, HeroDesc, HeroDescHeader } from './hero-banner-styles.js';

const HeroBanner = () => {

	return (
		<HeroBannerContainer>
			<TextContainer>
				<SmallHeroText>small hero text</SmallHeroText>
				<MidHeroText>mid hero text</MidHeroText>
			</TextContainer>
			<HeroLink href='/product/ID'>
				<HeroButton>Button Text</HeroButton>
			</HeroLink>
			<HeroDesc>description</HeroDesc>
			<HeroDescHeader>description</HeroDescHeader>
			<HeroImg />
		</HeroBannerContainer>
		)
}

export default HeroBanner;