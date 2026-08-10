import React from 'react'
// Importando o Hook useState
import {useState} from "react"

const Contador = () => {

    // HOOK - useState - Manipula o estadp da variável
    const [contador,setContador]=useState(0);

  return (
    <>
      <h1>Contagem inicial:{contador}</h1>
      <button onClick={()=>setContador(contador+1)}>Aumentar</button>
      <button onClick={()=>setContador(contador-1)}>Diminuir</button>
    </>
  )
}

export default Contador
