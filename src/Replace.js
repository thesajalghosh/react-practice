import React from 'react'
import { useState } from 'react'

const Replace = () => {

    const [inputValue, setinputvalue] = useState('first value');

    let afterchange = (event) =>{
        const newValue = event.target.value;
        setinputvalue(newValue);
    }
  return (
    <div>

    <input placeholder='entering your text' onChange={afterchange}/>
    {inputValue}
      
    </div>
  )
}

export default Replace
