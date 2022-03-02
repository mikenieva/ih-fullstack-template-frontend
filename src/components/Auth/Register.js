// ./src/components/Auth/Register.js

import { useState, useContext } from 'react'

import UsersContext from './../../context/Users/UsersContext'

export default function Register() {

  const ctxUser = useContext(UsersContext)

  const {
    registerUser
  } = ctxUser


  const [data, setData] = useState({
    name: "",
    lastname: "",
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

    registerUser(data)

  }

  return (
    <>
      <form onSubmit={(evt) => { handleSubmit(evt) }}>
        <label>Nombre</label>
        <input 
          name="name"
          value={data.name}
          onChange={(evt) => { handleChange(evt) }}
        />

        <br />

        <label>Apellido</label>
        <input 
          name="lastname"
          value={data.lastname}
          onChange={(evt) => { handleChange(evt) }}
        />

        <br />

        <label>Email</label>
        <input 
          name="email"
          value={data.email}
          onChange={(evt) => { handleChange(evt) }}
        />

        <br />

        <label>Contraseña</label>
        <input 
          name="password"
          value={data.password}
          onChange={(evt) => { handleChange(evt) }}
          type="password"
        />

        <button type="submit">Crear usuario</button>

      </form>
    </>
  )
}
