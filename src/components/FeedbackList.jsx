import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
const FeedbackList = ({feedback, handleDelete}) => {
  
  return (
      <>
          {feedback.map(
              (item)=><FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
              )
          }
      </>
    
  )
}

FeedbackList.propTypes={
  feedback:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
    }
    )
  )
  
}

export default FeedbackList