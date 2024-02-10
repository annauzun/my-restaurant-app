import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(1)
  
    const plus = () => {
      setCount(count + 1)
    }
  
    const minus = () => {
      setCount(count - 1)
    }
  
    return (
      <div className="flex gap-4 text-xl">
        <button className="" onClick={minus}> - </button>
        <p className="">{count}</p>
        
          
          <button onClick={plus}> + </button>
        
      </div>
    );
  }
  
  export default Count;