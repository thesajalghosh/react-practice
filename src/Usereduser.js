import React, {useState} from 'react'

const Usereduser = () => {

    const [counter, setcounter] = useState(0);
    const [text, settext] = useState(true);

const onClick = ()=>{
    setcounter(counter+1);
    settext(!text);
}


  return (
    <div>
    {counter}
    <button onClick={onClick}>click me</button>
    {text && <p>this is the text</p>}
      
    </div>
  )
}

export default Usereduser
