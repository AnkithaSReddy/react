import React from 'react'
import NavBarFOrCrud from './NavBarFOrCrud'
import { Outlet } from 'react-router-dom'

const Lay = () => {
  return (
    <div>
      <NavBarFOrCrud />
      <Outlet/>
    </div>
  )
}

export default Lay