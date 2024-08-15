import { useState } from "react"

function Status() {
    
    // Like
    const [like, setLike] = useState(0)

    function addLike() {
        setLike(like + 1)
    }
    
    // Dislike
    const [dislike, setDislike] = useState(0)

    function addDislike() {
        setDislike(dislike + 1)
    }

    // Lowkey Agree
    const [lowkeyAgree, setLowkeyAgree] = useState(0)

    function addLowkeyAgree() {
        setLowkeyAgree(lowkeyAgree + 1)
    }
    
    
    return (
        <div>
            <p>Cheese sucks</p>
            <button onClick={addLike}>Like ({like})</button>
            <button onClick={addDislike}>Dislike ({dislike})</button>
            <button onClick={addLowkeyAgree}>Lowkey ({lowkeyAgree})</button>
        </div>
        
    )
}

export default Status