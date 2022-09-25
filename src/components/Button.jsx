import React from 'react'
import "../styles/button.css"
const Button = (props) => {
  return (
    <>
      <button className={props.className}>{props.name}</button>
    </>
  )
}

export default Button
