import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { icons } from '../../assets/icon/icons'
import './Tabla.css'
import { useState } from 'react'
import { ModalCita } from '../Modals/ModalCita'
// import { ModalUpdateTareas } from '../ModalTareas/ModalUpdateTareas'

export function Tabla ({ headers, data, tabla, rol, handleUpdate }) {
  const [modalTareas, setModalTareas] = useState(false)
  return (
    <div className='tabla'>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            return (
              <tr key={i}>
                {Object.values(row).map((cell, index) => (
                  <td key={index}>{cell}</td>
                ))}
                {rol === 'Paciente' && tabla === 'citas' && <td><Icon icon={icons.IConfig} onClick={() => setModalTareas(true)} /></td>}
                {modalTareas && <ModalCita row={row} setModal={setModalTareas} />}
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}
