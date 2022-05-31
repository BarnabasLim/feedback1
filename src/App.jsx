import React from 'react'
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom'
import './App.css'
//UseContext
import { FeedbackProvider } from './context/FeedbackContext'

import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'

//Pages
import AboutPage from './pages/AboutPage'

function App() {
  //Feedback Entity
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