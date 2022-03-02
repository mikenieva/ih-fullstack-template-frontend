// ./src/context/Pets/PetsState.js

import { useReducer } from 'react'

import axiosClient from './../../config/axios'

import PetsContext from './PetsContext'
import PetsReducer from './PetsReducer'

const PetsState = (props) => {

	const initialState = {

		pets: []

	}


	const [globalState, dispatch] = useReducer(PetsReducer, initialState)

	const getPets = async () => {

		const res = await axiosClient.get("/api/pets")

		const arrCats = res.data.data

		dispatch({
			type: "GET_PETS",
			payload: arrCats
		})

	}

	const createPet = async (dataForm) => {

		await axiosClient.post("/api/pets/create", dataForm)

		getPets()

	}


	return (
		<PetsContext.Provider
			value={{
				pets: globalState.pets,
				getPets,
				createPet
			}}
		>
			{props.children}
		</PetsContext.Provider>
	)


}


export default PetsState