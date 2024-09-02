import { Icon } from '@iconify/react'
import { icons } from '../../assets/icon/icons'
import './ModalTareas.css'
import { useState } from 'react'
// import { url_createQuejas } from '../../assets/api/user.routes'
import { toast } from 'sonner'

export function ModalEspe ({ setModal }) {
  const [valores, setValores] = useState()

  const handleChange = (e) => {
    setValores({
      ...valores,
      [e.target.name]: (e.target.value).trim()
    })
  }

  const handleClick = async () => {
    try {
      /* await axios.post(url_createQuejas, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }) */
      toast.success('Especialidad creada')
    } catch (error) {
      console.log(error)
      toast.error('Error al crear cita')
    }
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <form>
          <label>
            <Icon icon={icons.IEmail} />
            <input
              type='text'
              placeholder='Nombre de la especialidad'
              name='nombre'
              onChange={handleChange}
              minLength='1'
              maxLength='50'
            />
          </label>
          <label>
            <Icon icon={icons.IInfo} />
            <input
              type='text'
              onChange={handleChange}
              placeholder='Descripción de la especialidad'
              name='description'
              minLength='1'
              maxLength='30'
            />
          </label>
        </form>
        <div>
          <button
            type='button'
            onClick={handleClick}
          >
            Agregar
          </button>
          <button
            type='button'
            onClick={() => setModal(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
