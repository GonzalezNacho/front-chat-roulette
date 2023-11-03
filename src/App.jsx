import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ControladorContenido } from './components/ControladorContenido'
import { useState } from 'react'

function App() {

  const [contenido, setContenido] = useState('Bienvenida')

  return (
    <>
      <Header setContenido={setContenido}/>
      <ControladorContenido contenido={contenido}/>
      <Footer/>
    </>
  )
}

export default App
