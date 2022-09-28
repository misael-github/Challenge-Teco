import React from 'react'
import "../styles/input.css"
const Input = (props) => {
  return (
    <>
      <input className={props.className} onChange={props.onChange} type={props.type} placeholder={props.placeholder}></input>
    </>
  )
}

export default Input
