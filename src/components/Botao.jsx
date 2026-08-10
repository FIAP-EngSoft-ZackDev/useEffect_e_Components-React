import React from 'react'

const Botao = () => {
  
    const handleClick=()=>(
        alert("Você clicou no botão componente")
    )
  
    return (
    <div>
        {/* elemento botão chamando a função com evento */}
      <button onClick={handleClick}>Botão Componente</button>
    </div>
  )
}

export default Botao
