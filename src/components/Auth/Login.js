// ./src/components/Auth/Login.js
import {useContext, useState} from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Login() {

  const ctxUser = useContext(UsersContext)

  const {
    loginUser
  } = ctxUser


  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const handleSubmit = (event) => {
    
    event.preventDefault()

    loginUser(data)

  }


  return (
	  <>
      <form onSubmit={(evt) => { handleSubmit(evt) }}>
        <label>Email</label>
        <input 
          name="email"
          value={data.email}
          onChange={(evt) => { handleChange(evt) }}
        />

        <label>Password</label>
        <input 
        name="password"
        value={data.password}
        onChange={(evt) => { handleChange(evt) }}
        type="password"
        />

        <button type="submit">Iniciar sesión</button>

      </form>
    </>
  )
}
