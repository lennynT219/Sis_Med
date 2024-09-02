import { Route, Routes } from 'react-router-dom'
import './Dashboard.css'
import { DashboardLayout } from '../../layout/DashboardLayout'
import { Citas } from '../../views/Citas/Citas'

const Pacientes = () => <div>Pacientes</div>
const Espe = () => <div>Especialidades</div>

export function Dashboard () {
  return (
    <section className='dashboard'>
      <DashboardLayout>
        <Routes>
          <Route path='citas' element={<Citas />} />
          <Route path='pacientes' element={<Pacientes />} />
          <Route path='especialidades' element={<Espe />} />
        </Routes>
      </DashboardLayout>
    </section>
  )
}
