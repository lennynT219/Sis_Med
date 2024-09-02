import { Icon } from '@iconify/react'
import './SideBar.css'
import { icons } from '../../assets/icon/icons'
import { OpcionesUser } from '../OpcionesSidebar/OpcionUser'
import { OpcionesAdmin } from '../OpcionesSidebar/OpcionAdmin'
import { Link, useNavigate } from 'react-router-dom'
// import { useDataUser } from '../../assets/context/dataUser'

export function SideBar ({ home }) {
  const navigate = useNavigate()
  // const { response } = useDataUser()
  const response = {
    rol: 'Admin',
    genero: 'M',
    nombres: 'Juan Carlos',
    apellidos: 'Perez'
  }
  const handleClick = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  const rol = response?.rol
  const imagen = response?.img_pefil ? response?.img_pefil : 'perfil.png'
  return (
    <aside className='sidebar'>
      <div>
        <img src={imagen} alt='foto de perfil' />
        <p>Rol:{rol}</p>
        <p>{response?.nombres?.split(' ')[0]} {response?.apellidos?.split(' ')[0]}</p>
        <div class='botones'>
          <Icon icon={icons.ICasa} onClick={home} />
          <Link to='perfil'><Icon icon={icons.IPerfil} /> </Link>
          <Icon icon={icons.ICerrar} onClick={handleClick} />
        </div>
      </div>
      {(rol === 'Paciente' || rol === 'Admin') && <OpcionesUser />}
      {rol === 'Admin' && <OpcionesAdmin />}
    </aside>
  )
}
