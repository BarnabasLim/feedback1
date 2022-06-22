import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
  const {isLoading, feedback}=useContext(FeedbackContext);

  if(!isLoading && (!feedback || feedback.length===0)){
    return <p>No Feedback Yet !!</p>
  } 
  return (
      isLoading?
        <p>Loading Screen</p>
      :
      <>
          {feedback.map(
              (item)=><FeedbackItem key={item.id} item={item} />
              )
          } 
      </>
    
  )
}

export default FeedbackList