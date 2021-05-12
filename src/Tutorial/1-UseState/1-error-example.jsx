import React, {useState} from 'react'

const ErrorExample = () => {
    let title = "Random Title";
    const handleClick = ()=>{
        title = "hello people";
        console.log(title);
    }
    return (
        <div className="container" style={{textAlign:"center"}}>
            <br/>
            <h2><b>Use Effect Tutorial</b></h2>
            <h2><b>{title}</b></h2>
            <button type="button" className="btn btn-primary" onClick={handleClick}>My Button</button>
        </div>
    )
}

export default ErrorExample
