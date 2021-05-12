import React, {useState} from 'react'

const UseStateExample = () => {
    const [text, setText] = useState("Random Title")
    const handleClick = ()=>{
        switch(text){
            case "Random Title": setText("Hello World"); break;
            case "Hello World": setText("Random Title"); break;
        }
    }
    return (
        <div className="container" style={{textAlign:'center'}}>
            <br/>
            <h3><b>{text}</b></h3>
            <button className="btn btn-primary" onClick={handleClick}>Change Title</button>
        </div>
    )
}

export default UseStateExample
