import React from 'react'

function Completion() {
  return (
    <div style={{ textAlign: 'center', marginTop: '12rem', marginBottom: '16rem'}}>
      <p style={{ fontSize: '18px'}}>Thank you for your purchase!</p>
      <p style={{ fontFamily: 'Abel', fontSize: '24px'}}>Order confirmation: #{Math.floor(Math.random() * 10000000)}</p>
    </div>
  )
}

export default Completion