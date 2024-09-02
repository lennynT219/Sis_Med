import { useState } from 'react'
// import { url_getAllTareas } from '../../assets/api/pasante.routes'
// import { useDataUser } from '../../assets/context/dataUser'
import { useGet } from '../../assets/hooks/useData'
import { Tabla } from '../../conponents/Tabla/Tabla'

export function Pacientes () {
  const headers = ['ID', 'NOMBRE', 'APELIDOS', 'FECHA DE NACIMIENTO', 'DIRECCIÓN', 'GENERO', 'CUIDAD', 'TELEFONO', 'EMAIL']
  // const { response: user } = useDataUser()
  // const { response: tareas } = useGet(url_getAllTareas)
  const [modal, setModal] = useState(false)
  const user = {
    rol: 'Admin'
  }
  const paciente = [
    {
      _id: '1',
      nombre: 'Juan',
      apellidos: 'Perez',
      fechaNacimiento: '1990-01-01',
      direccion: 'Calle 1 # 2-3',
      genero: 'Masculino',
      cuidad: 'Cali',
      telefono: '1234567890',
      email: 'juan@gmail.com'
    }

  ]

  return (
    <>
      <h1>Getión de especialidades</h1>
      <hr />
      {paciente.length > 0
        ? <Tabla
            headers={headers}
            data={paciente}
            tabla='tareas'
            rol={user?.rol}
            handleUpdate={() => setModal(!modal)}
            modal={modal}
          />
        : <h2>No hay tareas pendientes</h2>}
    </>
  )
}
