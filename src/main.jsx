import React from 'react'
import ReactDOM from 'react-dom/client'
// import { App, FavNumber } from './App.jsx'
import Home from './Home.jsx'
import { NumberTrackerProvider } from './NumberTrackerProvider.jsx'
import Project from './Project.jsx'
import { SumProvider } from './SumProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Help from './Help.jsx'
import NavBar from './Nav.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Project />
  },
  {
    path: "/help",
    element: <Help />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <SumProvider>
      <RouterProvider router={router} >
      
      </RouterProvider>
    </SumProvider>

    {/* <NumberTrackerProvider>
      <Home />
    </NumberTrackerProvider> */}
  </React.StrictMode>,
)
