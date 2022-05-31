import { createContext, useState } from "react";
import {v4 as uuidV4} from 'uuid'
import {FeedbackData} from '../data/FeedbackData'

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
    //State
    const [feedback, setFeedback]=useState(FeedbackData)

    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false,
    })

    //Methods

    //Delete Feedback item
    const deleteFeedback=(id)=>{
        const rmvItem = document.getElementById(id);
        rmvItem.classList.add('disappear')
        setTimeout(()=>{setFeedback((prev)=>{return prev.filter((item)=>item.id!==id)})}, 200)
        // console.log(id)
        // setFeedback((prev)=>{return prev.filter((item)=>item.id!==id)})
    
    }

    //Add Feedback item
    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidV4()
        console.log(newFeedback)
        setFeedback((prev)=>{return [newFeedback,...feedback]})
    }

    //Set items to be updated
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    //update Feedback
    const updateFeedback=(id, updItem)=>{
        setFeedback(feedback.map((item)=>(
            item.id===id?
            {...item, ...updItem}:
            item
        )))
        setFeedbackEdit({
            item:{},
            edit:false,
        })
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext