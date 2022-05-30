import { createContext, useState } from "react";
import {v4 as uuidV4} from 'uuid'
import {FeedbackData} from '../data/FeedbackData'

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
    //State
    const [feedback, setFeedback]=useState(FeedbackData)
    //Methods
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
        setFeedback((prev)=>{return [newFeedback,...feedback]})
    }
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext