import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const CommonLayout: React.FC = () => {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default CommonLayout