import React from 'react'
import { useState } from 'react'
function usestate() {
    // states hongi hmesha vo top pe hi initialize hogi
    const [first, setfirst] = useState(0) // usestate se  hum state management krte yeh ek variable hota hai jise hum change kr skte aaram se and us variable ki value ko jsx mein show krwa skte hr baar jb vo change ho 
    
  return (
    <div>usestate sekhenge hum yha {first}

       <button onClick={()=>{
        setfirst(first + 1)
       }}>click me </button>

    </div>
  )
}
// ab main cheez hai jb bhi state change hoti hai to page re render hota hai.
export default usestate