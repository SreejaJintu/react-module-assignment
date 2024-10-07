import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router'
import Store from './redux/Store'

function RootLayout() {
  return (
    <Provider store={Store}>
    <div>
        <Navbar/>
        <main>
        <Outlet/>
        </main>
    </div>
    </Provider>
  )
}

export default RootLayout