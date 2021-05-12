import React, {useState} from 'react'
import {data} from '../Source/data'
const UseStateArray = () => {
    const [people, setPeople] = useState(data)
    const removeItem = (id)=>{
      let newPeople = people.filter((person)=>person.id !== id);      
        setPeople(newPeople)
    }
    return (
        <div className="container" style={{textAlign:"center"}}>
            <br/>
            <h3><b></b></h3>
            {people.map((person)=>{
                const {id, name} = person;
               return <div key={id}>
                   <h3><b>{id}  {name.toUpperCase()}</b></h3>
                   <button className="btn btn-sm btn-danger" onClick={()=> removeItem(id)}>Remove</button>
               </div>
            })}
            <br/>
            <button className="btn btn-lg btn-danger" onClick={()=>setPeople([])}>Clear Items</button>
        </div>
    )
}

export default UseStateArray
