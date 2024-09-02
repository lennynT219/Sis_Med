/* eslint-disable camelcase */
import { useState } from 'react'
// import { url_getAllQuejas } from '../../assets/api/admin.routes'
// import { url_createQuejas } from '../../assets/api/user.routes'
// import { useDataUser } from '../../assets/context/dataUser'
import { useGet } from '../../assets/hooks/useData'
import { Tabla } from '../../conponents/Tabla/Tabla'
import './Citas.css'
import { ModalCita } from '../../conponents/Modals/ModalCita'

const headers = ['ID', 'CODIGO', 'PACIENTE', 'DESCRIPCÓN', 'ESPECIALIDAD']

export function Citas () {
  const [modal, setModal] = useState(false)
  // const { response: user } = useDataUser()
  const user = {
    rol: 'Admin'
  }
  // const url = user?.rol === 'Admin' ? 'http://localhost:4000/citas' : 'http://localhost:4000/citas'

  const response = [
    {
      _id: '1',
      codigo: 'CITA-001',
      paciente: 'Juan',
      descripcion: 'Cita de prueba',
      especialidad: 'Medicina General',
      id: '05ff'
    },
    {
      _id: '2',
      codigo: 'CITA-002',
      paciente: 'Jose',
      descripcion: 'Cita de prueba 2',
      especialidad: 'Medicina General',
      id: '4c81'
    }
  ]

  return (
    <>
      <h1>Gestión de Quejas</h1>
      <hr />
      {user?.rol !== 'Admin' && <button onClick={() => { setModal(true) }}>Crear Cita</button>}
      {response.length > 0
        ? <Tabla headers={headers} data={response} tabla='citas' rol={user?.rol} />
        : <h2>No hay citas pendientes</h2>}
      {modal && <ModalCita setModal={setModal} />}
    </>
  )
}
