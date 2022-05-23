import React from 'react'

const RatingSelect = ({rating,setRating}) => {
  const handleChange=(e)=>{
    // console.log("print"+e.currentTarget.value)
    setRating(+e.currentTarget.value)
  }
  return (
    <ul className='rating'>
        {Array.from(Array(10).keys()).map(
        (item)=>{
            item=item+1;
            return (
                <li key={item}>
                    <input 
                        type="radio"
                        id={`num${item}`}
                        name='rating'
                        value={`${item}`}
                        onChange={handleChange}
                        checked={rating===item}
                    />
                    <label htmlFor={`num${item}`}>{item}</label>
                </li>
            )   
        }
        )}
    </ul>
  )
}

export default RatingSelect