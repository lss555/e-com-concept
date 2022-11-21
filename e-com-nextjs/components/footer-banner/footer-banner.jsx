import React from 'react';
import { FooterBannerContainer, LogoImage, FooterBannerCard, FooterBannerName, TextContainer } from './footer-banner-styles.js';
import { urlFor } from '../../lib/client';

// <LogoImage src={urlFor(image && image[0])} width={250} height={250} />

const FooterBanner = ({ footerBanner }) => {

	return (
		<FooterBannerContainer>
			<FooterBannerCard>
				<TextContainer>
					<FooterBannerName>{footerBanner.title}</FooterBannerName>
				</TextContainer>
				<LogoImage src={urlFor(footerBanner.image && footerBanner.image[0])} width={250} height={250} />
			</FooterBannerCard>
		</FooterBannerContainer>
		);
}

export default FooterBanner