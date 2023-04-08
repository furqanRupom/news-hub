import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Spinner from './components/spinner/spinner'

function App() {
  const loaderNews = useNavigation()

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div>
      {
        loaderNews.state === 'loading' ? <Spinner></Spinner> : ""
      }
      </div>
      <Outlet />
    </div>
  )
}

export default App
