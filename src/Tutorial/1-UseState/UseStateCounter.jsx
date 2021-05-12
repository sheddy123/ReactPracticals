import React, {useState} from 'react'

const UseStateCounter = () => {
    const [value, setValue] = useState(0)
    const reset = ()=>{
        setValue(0)
    }
    return (
        <div className="container" style={{textAlign:"center", margin:"4rem 0"}}>
            <h4><b>UseState Counter Example</b></h4>
            <br/>
            <h5><b>Regular Counter</b></h5>
            <h1>{value}</h1>
            <button className="btn btn-secondary" onClick={()=> setValue(value - 1)}>Decrease</button> &nbsp;
            <button className="btn btn-danger" onClick={reset}>Reset</button>&nbsp;
            <button className="btn btn-primary" onClick={()=> setValue(value + 1)}>Increase</button>
        </div>
    )
}

export default UseStateCounter
