import React from 'react'
import './App.css'
import Header from './components/Header'
function App() {
//   return (
//     <div>Hello World</div>
//   )
  return (
    <>
    {/* Header Component */}
    <Header text={'JFeedback UI'}>Haha</Header>
    {/* JSX in JS format */}
    {React.createElement('div',{ color:'blue'}, 
        React.createElement('h1',{className: 'name', color: 'pink',}, 'My App'))
    }
    </>
    
  )

}

export default App