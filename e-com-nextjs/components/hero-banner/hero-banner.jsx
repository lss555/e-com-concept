import React, { useEffect, useState } from 'react';
import { HeroBannerContainer, TextContainer, SmallHeroText, MidHeroText, HeroImg, HeroLink, HeroButton, HeroDesc, HeroDescHeader, DescContainer, HeroButtonContainer, MarqueeContainer, MarqueeText, ArrowIconContainer } from './hero-banner-styles.js';
import { urlFor } from '../../lib/client';
import Marquee from "react-fast-marquee";
import SouthIcon from '@mui/icons-material/South';

const HeroBanner = ({ heroBanner, products }) => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const [londonTime, setLondonTime] = useState(new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London"}))
	
	// Time now
	useEffect(() => {
		let secTimer = setInterval(() => {
			setTime(new Date().toLocaleTimeString())
		}, 1000)
		return () => clearInterval(secTimer);
	}, []);
	// London Time
	useEffect(() => {
		let secTimer = setInterval(() => {
			setLondonTime(new Date().toLocaleTimeString("en-US", { timeZone: "Europe/London" }))
		}, 1000)
		return () => clearInterval(secTimer);
	}, []);

if (!products || !heroBanner) {
	return <div>loading...</div>;
}

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
			<MarqueeContainer>
				<Marquee gradient={false} speed={120}>
					<ArrowIconContainer><SouthIcon /></ArrowIconContainer>
					<MarqueeText>{products[0].name}</MarqueeText>
					<MarqueeText>{time}</MarqueeText>
					<MarqueeText>{products[1].name}</MarqueeText>
					<ArrowIconContainer><SouthIcon /></ArrowIconContainer>
					<MarqueeText>{products[2].name}</MarqueeText>
					<MarqueeText>{products[3].name}</MarqueeText>
					<ArrowIconContainer><SouthIcon /></ArrowIconContainer>
					<MarqueeText>{products[4].name}</MarqueeText>
					<MarqueeText>{products[5].name}</MarqueeText>
					<MarqueeText>{londonTime} GMT</MarqueeText>
					<MarqueeText>{products[0].name}</MarqueeText>
				</Marquee>
			</MarqueeContainer>
		</HeroBannerContainer>
		)
}

export default HeroBanner;