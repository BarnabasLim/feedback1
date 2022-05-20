import React from 'react'
import propTypes from 'prop-types'
import Card from './shared/Card'
const FeedbackItem = ({item}) => {


  return (
    <>
      <Card reverse={false}>
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