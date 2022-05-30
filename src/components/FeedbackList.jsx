import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
  const {feedback,deleteFeedback}=useContext(FeedbackContext);

  return (
      <>
          {feedback.map(
              (item)=><FeedbackItem key={item.id} item={item} handleDelete={deleteFeedback}/>
              )
          } 
      </>
    
  )
}

export default FeedbackList