import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router'

import './index.css'
import App from './App.jsx'
import AboutUs from './routes/AboutUs.jsx'
import Header from './components/Header/Header.jsx'
import Games from './routes/Games.jsx'
import Game from './components/Game/Game.jsx'
import LoginPage from './routes/Login.jsx'
import DashboardPage from './routes/Dashboard.jsx'
import LoginAlternativo from './components/LoginAlternativo/LoginAlternativo.jsx'

const usuario = JSON.parse(localStorage.getItem("usuario"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "aboutus",
    element: <AboutUs />
  },
  {
    path: "games",
    element: <Games />
  },{
    path: "games/:gameId",
    element: <Game />
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "loginalt",
    element: <LoginAlternativo />
  },
  {
    path:"dashboard",
    element: usuario ? <DashboardPage /> : <App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
