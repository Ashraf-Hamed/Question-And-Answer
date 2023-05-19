import React , {useState} from 'react'

import { FaAngleDown , FaAngleUp } from "react-icons/fa";

export default function Question({title , info}) {
  
  const [showInfo , setShowInfo] = useState(false);
    return (
   
    
        <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={() =>  setShowInfo(!showInfo)}> 
           {showInfo ? <FaAngleDown/> : <FaAngleUp/>}
            </button>
        </header>

        <p> {showInfo  && <p>{info}</p> }</p>

        </article>

  )
}
