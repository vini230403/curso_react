import './App.css'


// 1 - Config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


// Components
import Navbar from './components/Navbar'
import SearchForms from './components/SearchForms'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'


function App() {
  

  return (
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
        {/* 2 - Links com react router */}
        <Navbar/>
        {/* 9 - Search */}
        <SearchForms/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 4 - Rota dinâmica */}
            <Route path="/products/:id" element={<Product />} />
            {/* 6 */}
            <Route path="/products/:id/info" element={<Info />} /> 
            {/* 9 - Search */}
            <Route path="/search" element={<Search/>} />
            {/* 10 - Redirect */}
            <Route path="/company" element={<Navigate to="/about"/>}/>
            {/* 7 - no match routr*/}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
