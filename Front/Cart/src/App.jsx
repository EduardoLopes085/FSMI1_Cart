import './App.css'
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
