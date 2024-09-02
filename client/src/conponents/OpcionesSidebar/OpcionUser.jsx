import { Icon } from '@iconify/react'
import { icons } from '../../assets/icon/icons'
import { Link } from 'react-router-dom'

export function OpcionesUser () {
  return (
    <ul>
      <li>
        <Link to='citas'>
          <Icon icon={icons.IQueja} />
          <p>Gestión de citas</p>
        </Link>
      </li>
    </ul>
  )
}
