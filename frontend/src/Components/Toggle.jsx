import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX} from "@fortawesome/free-solid-svg-icons";

export default function Toggle(props) {
  return (
    <button className='w-[50px] h-[50px] rounded-[50%] bg-transparent fixed top-[1.35rem] left-[0.5rem] ' onClick={()=>
    {
        console.log(props.check);
        props.setOpen((prev)=>!prev);
    }}>
      {
        props.check?<FontAwesomeIcon icon={faX} className='fa-2x'/>:<FontAwesomeIcon icon={faBars} className="fa-2x" />
      }
        
    </button>
  )
}