import React from 'react'
import InputBox from './InputBox'

function Header({OnSubmit}) {
  return (
    <div className='header'>
        <InputBox OnSubmit={OnSubmit} />
    </div>
  )
}

export default Header