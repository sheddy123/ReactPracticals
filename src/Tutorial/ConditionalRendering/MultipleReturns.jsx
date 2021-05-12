import React, {useState, useEffect} from 'react'

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
    const [isLoading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('Default User');

    useEffect(()=>{
        //setLoading(true);
        fetch(url)
        .then((resp)=> {
            if(resp.status >= 200 && resp.status <=299){
                return resp.json()
            }else{
                setLoading(false);
                setIsError(true);
                throw new Error(resp.statusText);
            }
        })
        .then((user)=>{
            const {login} = user;
            setUser(login);
            setIsError(false);
            setLoading(false);
        })
        .catch((error)=> console.log(error));
    },[])
    if(isLoading){
        return <div>
            <h4>Loading...</h4>
        </div>
    }
    if(isError){
        return <div>
            <h4>Error...</h4>
        </div>
    }
    return (
        <div className="container" style={{margin:"4rem 0", textAlign:"center"}}>
            <h3><b>{user}</b></h3>
        </div>
    )
}

export default MultipleReturns
