// ./src/context/Users/UsersReducer.js

const reducer = (globalState, action) => {

	switch(action.type){
		case "REGISTRO_EXITOSO":
		case "LOGIN_EXITOSO":

			localStorage.setItem("token", action.payload)

			return {
				...globalState,
				authStatus: true
			}

		case "VERIFICAR_TOKEN":
			return {
				...globalState,
				currentUser: action.payload,
				authStatus: true
			}

		case "CERRAR_SESION":

			localStorage.removeItem("token")

			return {
				...globalState,
				authStatus: false,
				currentUser: {
					name: "",
					lastname: "",
					email: ""
				}
			}

		default:
			return globalState


	}


}

export default reducer