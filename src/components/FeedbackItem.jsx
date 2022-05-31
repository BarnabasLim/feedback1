import React, { useContext } from 'react'
import propTypes from 'prop-types'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {
  const {deleteFeedback, editFeedback}=useContext(FeedbackContext)

  return (
    <>
      <Card reverse={false} id={item.id}>
          <button className="close" onClick={()=>deleteFeedback(item.id)}><FaTimes color='red'/></button>
          <button className="edit" onClick={()=>editFeedback(item)}><FaEdit color='red'/></button>
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