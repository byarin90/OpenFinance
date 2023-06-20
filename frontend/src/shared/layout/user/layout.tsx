import { Outlet } from 'react-router-dom'
import {Header} from './header'

const Layout = () => {
  return (
    <div>
         <Header/>
        <Outlet />
    </div>
  )
}

export default Layout