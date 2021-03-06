import { createContext, useEffect, useState } from "react";
// import {v4 as uuidV4} from 'uuid'
// import {FeedbackData} from '../data/FeedbackData'

const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{
    //State
    const [feedback, setFeedback]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false,
    })

    //Methods
    useEffect(()=>{
        fetchFeedbacks();
    },[])

    //Get Feedbacks
    const fetchFeedbacks=async()=>{
        // const response1=await fetch('https://sleepy-atoll-12273.herokuapp.com/api/feedbacks')
        // console.log(response1);
        
        const response=await fetch('https://sleepy-atoll-12273.herokuapp.com/api/feedbacks'
        )
        console.log(response);
        const data=await response.json();
        console.log(data)
        setFeedback(data)
        setIsLoading(false)
    }

    //Delete Feedback item
    const deleteFeedback=async(id)=>{
        const rmvItem = document.getElementById(id);
        rmvItem.classList.add('disappear')
        const response=await fetch(`https://sleepy-atoll-12273.herokuapp.com/api/feedbacks/${id}`,{
            method:'DELETE'
        })
        console.log(response)
        setTimeout(()=>{setFeedback((prev)=>{return prev.filter((item)=>item.id!==id)})}, 200)
        // console.log(id)
        // setFeedback((prev)=>{return prev.filter((item)=>item.id!==id)})
    
    }

    //Add Feedback item
    const addFeedback=async(newFeedback)=>{
        const response =await  fetch('https://sleepy-atoll-12273.herokuapp.com/api/feedbacks',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(newFeedback)
        })
        console.log(response)
        const data=await response.json()
        console.log(data)
        // newFeedback.id=uuidV4()
        // console.log(newFeedback)
        setFeedback((prev)=>{return [data,...prev]})
    }

    //Set items to be updated
    const editFeedback=(item)=>{
        
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    //update Feedback
    const updateFeedback=async(id, updItem)=>{
        const response =await fetch(`https://sleepy-atoll-12273.herokuapp.com/api/feedbacks/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(updItem)
        })
        console.log(response)
        const data=await response.json();
        console.log(data)
        updItem=data
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
            isLoading,
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