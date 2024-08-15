import { useState } from "react"

function NewsLetterSignup() {
    
    const [inputVisibility, setInputVisibility] = useState('hidden')

    function toggleInput() {
        if (inputVisibility==='hidden'){
            setInputVisibility('block')
        } else {
            setInputVisibility('hidden')
        }
    }

    return (
        <div>
            <button onClick={toggleInput}>Toggle Newsletter</button>
            <form className={inputVisibility}>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="joedoe@gmail.com"></input>
            </form>
                
        </div>
    )
    
}

export default NewsLetterSignup