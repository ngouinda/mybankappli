import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Categories from './components/Categorie/Categorie'
import Depenses from './components/Depenses/Depenses'
import Home from './components/Home/Home'


function App() {
 

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/depenses" element={<Depenses/>} />
            <Route path="/categories" element={<Categories/>} />
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
