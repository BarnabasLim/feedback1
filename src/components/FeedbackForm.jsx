import React,{useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
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
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                <Button type={'submit'} version='primary'>send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm