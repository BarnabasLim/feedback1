import React,{useState} from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import { FeedbackData } from './data/FeedbackData'
function App() {
  const [Feedback,setFeedback]=useState(FeedbackData)

  return (
    <>
    {/* Header Component */}
    <Header text={'Feedback UI'}>Haha</Header>
    {/* FeedbackList */}
    <FeedbackList feedback={Feedback}/>
    {/* JSX in JS format */}

    {React.createElement('div',{ className: 'container',color:'blue'}, 
      React.createElement('h1',{className: 'name', color: 'pink',}, 'My App'))
    }


    </>
    
  )

}

export default App