import React, { useState } from 'react'

function Counter() {
    // let count = 1 normal variable
    const [count, setcount] = useState(1)
    function changeCount() {
        // alert("hai")
        // count = count + 1 normal variable
        // console.log(count)
        setcount(count + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={changeCount}>click</button>
        </div>
    )
}

export default Counter