import React, {useRef} from 'react'

const Reftut = () => {

    const inputref = useRef(null);

    const onclick = ()=>{
        // console.log(inputref.current.value);
        inputref.current.value = "";
    }
  return (
    <div>

    <h1>SAJAL</h1>
    <input placeholder='write something' ref={inputref}/>
    <button onClick={onclick}>Click Me</button>
      
    </div>
  )
}

export default Reftut
