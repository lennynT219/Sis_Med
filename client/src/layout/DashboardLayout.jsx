import { SideBar } from '../conponents'

export function DashboardLayout ({ children }) {
  return (
    <>
      <SideBar />
      <div className='all-content'>
        {children}
      </div>
    </>
  )
}
