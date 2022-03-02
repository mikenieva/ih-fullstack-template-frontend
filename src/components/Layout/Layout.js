// ./src/components/Layout/Layout.js

import { Outlet } from "react-router-dom"

import Header from './Header'
import Footer from './Footer'


export default function Layout() {
  return (
	<>
		<Header />
			
			<Outlet />

		<Footer />
	
	</>
  )
}
