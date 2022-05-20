import React from 'react'
import propTypes from 'prop-types'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'
const FeedbackItem = ({item, handleDelete}) => {


  return (
    <>
      <Card reverse={false}>
          <button className="close" onClick={()=>handleDelete(item.id)}><FaTimes color='red'/></button>
          <div className="num-display">{item.rating}</div>
          <div className="text-display">{item.text}</div>
      </Card>
      <Card reverse={true}>
          <div className="num-display">{item.rating}</div>
          <div className="text-display">{item.text}</div>
      </Card>
    </>
  )
}
FeedbackItem.propTypes={
  item: propTypes.object.isRequired
}


export default FeedbackItem