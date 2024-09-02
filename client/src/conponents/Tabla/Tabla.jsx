import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { icons } from '../../assets/icon/icons'
import './Tabla.css'
// import { ModalUpdateTareas } from '../ModalTareas/ModalUpdateTareas'

export function Tabla ({ headers, data, tabla, rol, handleUpdate, modal }) {
  console.log('data', data)
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
                {/* modal && <ModalUpdateTareas setModalTareas={handleUpdate} row={row} /> */}
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}
