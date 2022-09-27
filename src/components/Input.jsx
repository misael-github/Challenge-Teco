import React from 'react'
import "../styles/input.css"
const Input = (props) => {
  return (
    <>
      <input className={props.className} type={props.type} placeholder={props.placeholder}></input>
    </>
  )
}

export default Input
