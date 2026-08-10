import React from 'react'

const Dados = ({usuario,email}) => {
  return (
    <>
      <p>O nome do usuário: {usuario}</p>
      <p>O email do usuário: {email}</p>
    </>
  )
}

export default Dados