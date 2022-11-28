import React from 'react'

import { NavBarContainer, NavBarLogoContainer, NavBarLogoLink, NavBarCartIconButton, CartIconItemQty } from './navbar-styles.js'
import { AiOutlineShopping } from 'react-icons/ai'

const NavBar = () => {

	return (
		<NavBarContainer>
			<NavBarLogoContainer>
				<NavBarLogoLink href='/'>785 Clothing</NavBarLogoLink>
			</NavBarLogoContainer>
			<NavBarCartIconButton type="button">
				<AiOutlineShopping />
				<CartIconItemQty>1</CartIconItemQty>
			</NavBarCartIconButton>

		</NavBarContainer>
		);
}

export default NavBar