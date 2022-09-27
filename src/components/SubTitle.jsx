import React from 'react'
import "../styles/subTitle.css"

const SubTitle = (props) => {
  return (
    <>
      <h2 className='subTitle'>{props.subTitle}</h2>
    </>
  )
}

export default SubTitle
