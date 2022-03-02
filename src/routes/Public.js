// ./src/routes/Public.js

import { useContext, useEffect } from 'react'

import UsersContext from './../context/Users/UsersContext'


export default function Public({ component: Component} ) {

	const ctxUser = useContext(UsersContext)

	const {
		authStatus,
		verifyingToken
	} = ctxUser

	useEffect(() => {
		verifyingToken()

	}, [authStatus])


	return (
		<Component />
	)

}