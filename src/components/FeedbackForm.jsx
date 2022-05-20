import React,{useState} from 'react'
import Card from './shared/Card'
const FeedbackForm = () => {
  const [text, setText]=useState('')
  const handleTextChange=(e)=>{
      setText(e.target.Value);
  }

  return (
    <Card>
        <form>
            <h2>how would you rate your service with us?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' Value={text} />
                <button className="btn submit">send</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm