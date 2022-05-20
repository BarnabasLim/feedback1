import React from 'react'
import PropTypes from 'prop-types'
function Button({children, type, version, isDisabled}) {
  return (
    <button  type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:false,
}

Button.propTypes={
    children:PropTypes.node.isRequired,
    version:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    isDisabled:PropTypes.bool.isRequired
}

export default Button