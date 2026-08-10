import { useState } from 'react'
import Botao from './components/Botao'
import Aluno from "./components/Aluno"
import Dados from "./components/Dados"
import Contador from "./components/Contador"

function App() {

  const enviar=()=>{
    alert("Botão sem componente")
  }

  return (
  <>
    <Botao/>
    <Aluno nome="Fiap" idade="30"/>
    <Dados usuario="Huguinho" email="huguinho@email.com"/>
    <button onClick={enviar}>Botão sem componente</button>
    <Contador/>
  </>
  )
  
}

export default App