import { Icon } from '@iconify/react'
import './Login.css'
import { icons } from '../../assets/icon/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const [valores, setValores] = useState({})
  const [hide, setHide] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setHide(!hide)
    console.log(valores)
    localStorage.setItem('token', '123456')
    navigate('/')
  }

  return (
    <main className='login'>
      <form onSubmit={handleSubmit} className={`${!hide ? 'hide' : ''}`}>
        <h1>Iniciar Sesión</h1>
        <label>
          <Icon icon={icons.IUsuario} />
          <input type='email' name='email' placeholder='Correo Electrónico' onChange={handleChange} />
        </label>
        <label>
          <Icon icon={icons.IPassword} />
          <input type='password' name='password' placeholder='Contraseña' onChange={handleChange} />
        </label>
        <input type='submit' value='Iniciar Sesión' />
        <p onClick={() => { setHide(!hide) }}>¿No tienes una cuenta? Regístrate</p>
      </form>
      <form onSubmit={handleSubmit} className={`${hide ? 'hide' : ''}`}>
        <h1>Iniciar Sesión</h1>
        <label>
          <Icon icon={icons.IUsuario} />
          <input type='text' name='nombre' placeholder='Ingrese sus nombres' onChange={handleChange} />
        </label>
        <label>
          <Icon icon={icons.IUsuario} />
          <input type='text' name='apellido' placeholder='Ingrese sus apellidos' onChange={handleChange} />
        </label>
        <label>
          <Icon icon={icons.IUsuario} />
          <input type='date' name='fecha_nacimiento' placeholder='Ingrese su fecha de nacimiento' onChange={handleChange} />
        </label>
        <label>
          <Icon icon={icons.IUsuario} />
          <select name='genero' onChange={handleChange}>
            <option value=''>Seleccione su género</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>
        </label>
        <label>
          <Icon icon={icons.IUsuario} />
          <input type='text' name='cuidad' placeholder='Ingrese su cuidad' onChange={handleChange} />
        </label>
        <label>
          <Icon icon={icons.IUsuario} />
          <input type='text' name='direccion' placeholder='Ingrese su dirección' onChange={handleChange} />
        </label>
        <label>
          <Icon icon={icons.IUsuario} />
          <input type='text' name='telefono' placeholder='Ingrese su teléfono' onChange={handleChange} />
        </label>
        <label>
          <Icon icon={icons.IUsuario} />
          <input type='email' name='email' placeholder='Ingrese su correo electrónico' onChange={handleChange} />
        </label>
        <label>
          <Icon icon={icons.IPassword} />
          <input type='password' name='password' placeholder='Ingrese su contraseña' onChange={handleChange} />
        </label>
        <input type='submit' value='Registrarse' />
        <p onClick={() => { setHide(!hide) }}>¿Ya tienes una cuenta? Inicia Sesión</p>
      </form>
    </main>
  )
}
