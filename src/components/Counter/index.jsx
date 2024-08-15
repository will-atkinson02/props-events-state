
import { useState } from "react"

function Counter() {
    
    const [counts, setCounts] = useState(0)

    function addCounts(){
        setCounts(counts + 1)
        console.log(counts)
    }
    
    return (
        <div>
            <button onClick={addCounts}>Add counts</button>
            <p>Counts:</p>  
            <p className="text-pink-500">{counts}</p>
        
        </div>
        
    )

}

export default Counter