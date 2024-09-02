import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Login } from './pages/Login/Login'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { UpdateDataProvaider } from './assets/context/UpdateData'

function App () {
  return (
    <Router>
      <Toaster richColors position='top-right' />
      <UpdateDataProvaider>
        <Routes>
          <Route index path='/*' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </UpdateDataProvaider>
    </Router>
  )
}

export default App
