import React, {useState} from 'react'

const UseStateObject = () => {
    const randomMessage = {
        name:"Peter",
        age: 24,
        message: "random message"
    }

    const [person, setPerson] = useState(randomMessage)
    const changeMessage = ()=>{
        setPerson({...person, message:"No message"})
    }
    return (
        <div className="container" style={{textAlign:"center"}}>
            <br></br>
            <h4><b>UseState Object Example</b></h4>
            <br/>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <br/>
            <button className="btn btn-secondary" onClick={changeMessage}>Change Message</button>
        </div>
    )
}

export default UseStateObject
