import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components
import NavBar from './components/NavBar'

// Pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {
 

  return (
      <div>
        <h1>React Context API</h1>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/contato" element={<Contato/>}/>  
          </Routes>  
        </BrowserRouter>
      </div>
     
  )
}

export default App
