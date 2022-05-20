import React from 'react'
import propTypes from 'prop-types'
// import { useEffect } from 'react'

function Header(props) {
  const text=props.text
  // const children=props.children
  // useEffect(()=>{
  //   console.log(children)
  // },[])
  return (
    <header>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  )
}

//default prop
Header.defaultProps={
  text:'Feedback UI',
}

//prop Types
Header.propTypes={
  text: propTypes.string,
}

export default Header