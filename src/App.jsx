import React,{useState} from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import { FeedbackData } from './data/FeedbackData'
function App() {
  //Feedback Entity
  const [Feedback,setFeedback]=useState(FeedbackData)
  //Feedback Methods
  const deleteFeedback=(id)=>{
    console.log(id)
    setFeedback((prev)=>{return prev.filter((item)=>item.id!==id)})
  }

  return (
    <>
    {/* Header Component */}
    <Header text={'Feedback UI'}>Haha</Header>
    <div className="container">
      {/* FeedbackStats */}
      <FeedbackStats feedback={Feedback}/>
      {/* FeedbackList */}
      <FeedbackList feedback={Feedback} handleDelete={deleteFeedback}/>
      {/* JSX in JS format */}
    </div>

    {React.createElement('div',{ className: 'container',color:'blue'}, 
      React.createElement('h1',{className: 'name', color: 'pink',}, 'My App'))
    }


    </>
    
  )

}

export default App