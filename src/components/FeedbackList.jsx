import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

const FeedbackList = () => {
  const {isLoading, feedback}=useContext(FeedbackContext);

  if(!isLoading && (!feedback || feedback.length===0)){
    return <p>No Feedback Yet !!</p>
  } 
  return (
      isLoading?
        <Spinner/>
      :
      <>
        <Spinner/>
          {feedback.map(
              (item)=><FeedbackItem key={item.id} item={item} />
              )
          } 
      </>
    
  )
}

export default FeedbackList