import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Router} from 'react-router-dom'
import axios, {isCancel, AxiosError} from 'axios';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Router>
          <Route></Route>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
