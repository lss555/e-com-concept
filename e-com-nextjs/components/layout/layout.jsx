import React from 'react'
import Head from 'next/head'
import NavBar from '../navbar/navbar.jsx'
import Footer from '../footer/footer.jsx'

const Layout = ({ children }) => {

	return (
		<div>
			<Head>
				<title>785 Clothing</title>
			</Head>
			<header>
				<NavBar />
			</header>
			<main>
				{children}
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
		)
}

export default Layout