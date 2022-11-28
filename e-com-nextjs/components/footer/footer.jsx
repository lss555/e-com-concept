import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FooterContainer, FooterIcons, FooterIconsContainer, FooterLicensingText } from './footer-styles.js'

const Footer = () => {

	return (
		<FooterContainer>
			<FooterLicensingText>785 Clothing 2022 All rights reserved</FooterLicensingText>
			<FooterIconsContainer>
				<FooterIcons>
					<AiFillInstagram />
				</FooterIcons>
				<FooterIcons>
					<AiOutlineTwitter />
				</FooterIcons>
			</FooterIconsContainer>
		</FooterContainer>
		)
}

export default Footer