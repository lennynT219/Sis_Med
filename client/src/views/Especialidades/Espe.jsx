import { useState } from 'react'
// import { url_getAllTareas } from '../../assets/api/pasante.routes'
// import { useDataUser } from '../../assets/context/dataUser'
import { useGet } from '../../assets/hooks/useData'
import { Tabla } from '../../conponents/Tabla/Tabla'
import { ModalEspe } from '../../conponents/Modals/ModalEspe'

export function Espe () {
  const headers = ['ID', 'CODIGO', 'NOMBRE', 'DESCRIPCION']
  // const { response: user } = useDataUser()
  // const { response: tareas } = useGet(url_getAllTareas)
  const [modal, setModal] = useState(false)
  const user = {
    rol: 'Paciente'
  }
  const especialidades = [
    {
      _id: '1',
      codigo: 'ESP-001',
      nombre: 'Medicina General',
      descripcion: 'Especialidad de medicina general'
    },
    {
      _id: '2',
      codigo: 'ESP-002',
      nombre: 'Medicina Interna',
      descripcion: 'Especialidad de medicina interna'
    }
  ]

  return (
    <>
      <h1>Getión de especialidades</h1>
      <hr />
      {user?.rol === 'Admin' && <button onClick={() => { setModal(true) }}>Crear especialidad</button>}
      {especialidades.length > 0
        ? <Tabla
            headers={headers}
            data={especialidades}
            tabla='especialidades'
            rol={user?.rol}
            handleUpdate={() => setModal(!modal)}
            modal={modal}
          />
        : <h2>No hay tareas pendientes</h2>}
      {modal && <ModalEspe setModal={setModal} />}
    </>
  )
}
