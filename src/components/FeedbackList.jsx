import React, { useState } from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
const FeedbackList = ({feedback}) => {
  
  return (
      <div className="container">
          {feedback.map(
              (item)=><FeedbackItem key={item.id} item={item}/>
              )
          }
          <FeedbackItem key={111} item={{rating: 4, text:'barb'}}/>
      </div>
    
  )
}

FeedbackList.propTypes={
  feedback:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
    }
    )
  )
  
}

export default FeedbackList