// import './App.css'
import './assets/styles.css' // O professor tinha recomendado o uso desse estilo
import {BrowserRouter, Router, Route} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Router>
          <Route/>
        </Router>
      </BrowserRouter>
    </>
  )
}

export default App
