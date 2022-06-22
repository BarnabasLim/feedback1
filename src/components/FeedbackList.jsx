import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
  const {feedback}=useContext(FeedbackContext);

  return (
      <>
          {feedback.map(
              (item)=><FeedbackItem key={item.id} item={item} />
              )
          } 
      </>
    
  )
}

export default FeedbackList