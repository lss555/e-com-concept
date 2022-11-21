import React from 'react';
import { FooterBannerContainer, LogoImage, FooterBannerCard, FooterBannerName, TextContainer, FooterBannerButton, FooterBannerButtonContainer } from './footer-banner-styles.js';
import { urlFor } from '../../lib/client';

// <LogoImage src={urlFor(image && image[0])} width={250} height={250} />

const FooterBanner = ({ footerBanner: { title, image } }) => {

	return (
		<FooterBannerContainer>
			<FooterBannerCard>
				<TextContainer>
					<FooterBannerName>{title}</FooterBannerName>
					<FooterBannerButtonContainer>
						<FooterBannerButton>Explore</FooterBannerButton>
					</FooterBannerButtonContainer>
				</TextContainer>
				<LogoImage src={urlFor(image && image[0])} width={250} height={250} />
			</FooterBannerCard>
		</FooterBannerContainer>
		);
}

export default FooterBanner