import React,{useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
const FeedbackForm = ({handleAdd}) => {
  const [text, setText]=useState('')
  const [rating,setRating]=useState(10)
  const [btnDisabled,setBtnDisabled]=useState(true)
  const [message, setMessage]=useState('')



  const handleTextChange=(e)=>{
      const temp=e.target.value
      if(temp===''){
        setMessage(null)
        setBtnDisabled(true)
      }else if(temp!=='' && temp.trim().length<=10){
        setMessage('text must be at least 10 character')
        setBtnDisabled(true)
      }else{
        setMessage(null)
        setBtnDisabled(false)
      }
      
      setText(e.target.value);
      
  }
  const handeSubmit=(e)=>{
    e.preventDefault()
    if(text.trim().length>10){
      const newFeedback={
        text,
        rating
      }
      handleAdd(newFeedback)
      setText(0);
      setRating(10);
    }
  }
  return (
    <Card>
        <form onSubmit={handeSubmit}>
            
            <h2>how would you rate your service with us?</h2>
            <RatingSelect rating={rating} setRating={setRating}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                <Button type={'submit'} version='primary' isDisabled={btnDisabled}>send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm