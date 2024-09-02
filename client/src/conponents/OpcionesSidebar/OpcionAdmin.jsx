import { Icon } from '@iconify/react'
import { icons } from '../../assets/icon/icons'
import { Link } from 'react-router-dom'

export function OpcionesAdmin () {
  return (
    <ul>
      <li>
        <Link to='pacientes'>
          <Icon icon={icons.IUsuario} />
          <p>Gestión de pacientes</p>
        </Link>
      </li>
      <li>
        <Link to='especialidades'>
          <Icon icon={icons.IConfig} />
          <p>Gestión de especialidades</p>
        </Link>
      </li>
    </ul>
  )
}
