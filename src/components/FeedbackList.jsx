import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
  const {feedback}=useContext(FeedbackContext);
  if((!feedback && feedback.length===0)){
      return <p>No Feedback Yet</p>
  }
  return (
      <>
          <p>No Feedback Yet</p>
          {feedback.map(
              (item)=><FeedbackItem key={item.id} item={item} />
              )
          } 
      </>
    
  )
}

export default FeedbackList