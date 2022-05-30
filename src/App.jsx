import React,{useState} from 'react'
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom'
import './App.css'
import {v4 as uuidV4} from 'uuid'
//UseContext
import FeedbackContext from './context/FeedbackContext'
import { FeedbackProvider } from './context/FeedbackContext'

import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import { FeedbackData } from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

//Pages
import AboutPage from './pages/AboutPage'

function App() {
  //Feedback Entity
  const [Feedback,setFeedback]=useState(FeedbackData)
  //Feedback Methods
  const deleteFeedback=(id)=>{
    const rmvItem = document.getElementById(id);
    rmvItem.classList.add('disappear')
    setTimeout(()=>{setFeedback((prev)=>{return prev.filter((item)=>item.id!==id)})}, 200)
    // console.log(id)
    // setFeedback((prev)=>{return prev.filter((item)=>item.id!==id)})

  }

  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidV4()
    console.log(newFeedback)
    setFeedback((prev)=>{return [newFeedback,...Feedback]})
  }
  return (
    <>
    <FeedbackProvider>
          {/* Header Component */}
          <Header text={'Feedback UI'}>Haha</Header>
          <Router>
            <Routes>
              <Route path='/' element={
                  <div className="container">
                    {/* FeedbackForm */}
                    <FeedbackForm />
                    {/* FeedbackStats */}
                    <FeedbackStats />
                    {/* FeedbackList */}
                    <FeedbackList/>
        
                  </div>
              }/>

              <Route path='/about' element={<AboutPage/>}/>
            </Routes>
            {/* Links to about */}
            <AboutIconLink/>
          </Router>


          {/* JSX in JS format */}
          {React.createElement('div',{ className: 'container',color:'blue'}, 
            React.createElement('h1',{className: 'name', color: 'pink',}, 'My App'))
          }
    </FeedbackProvider>



    </>
    
  )

}

export default App