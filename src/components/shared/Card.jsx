import React from 'react'
import PropTypes from 'prop-types'
const Card = ({children, reverse,id}) => {

  return (
    <div className={`Card ${reverse && 'reverse'}`} id={id!==''?id:''}>
        {children}
    </div>
  )
}

Card.defaultProps={
    reverse: false,
    id:'',
}

Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}

export default Card