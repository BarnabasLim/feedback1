import React,{useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
const FeedbackForm = () => {
  const [text, setText]=useState('')
  const [btnDisabled,setBtnDisabled]=useState(true)
  const [message, setMessage]=useState('')



  const handleTextChange=(e)=>{
      const temp=e.target.value
      console.log(temp +'length'+temp.trim().length)
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

  return (
    <Card>
        <form>
            <h2>how would you rate your service with us?</h2>
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