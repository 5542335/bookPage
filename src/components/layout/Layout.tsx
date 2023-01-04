import { NavLink, Outlet } from 'react-router-dom'

import './Layout.css'

const navigation = [
  { id: 1, path: '/', title: 'TextPage' },
  { id: 2, path: '/auth', title: 'Auth' }
]

export const Layout = () => {
  return (
    <div className='layout'>
      <header className='header'>
        <nav className='nav'>
          <ul className='nav-bar'>
            {navigation.map(({ id, path, title }) => {
              return (
                <li key={id}>
                  <NavLink to={path}>{title}</NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}
