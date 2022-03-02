const reducer = (globalState, action) => {

	switch (action.type) {
		case "GET_PETS":
			return {
				...globalState,
				pets: action.payload
			}

		default:
			return globalState
	}
}

export default reducer