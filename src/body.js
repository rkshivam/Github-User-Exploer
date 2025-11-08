import { useEffect, useState } from "react";
// functionallity 1) Use karo callback 2) search by user name 3) implement try catch block
export default function Body()
{

    const [profile , setProfile] = useState([])
    const [want , setWant] = useState("")
    async function Gernateprofile(want) {
    try{
        const ran = Math.floor((Math.random()*10000+1))
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${want}`);
        const data = await response.json();
        if(Array.isArray(data)){
        setProfile(data)
        }
        else{
            console.error("API did not return an array:", data);
            setProfile([]);
        }
    }catch (error){
       console.error("Error fetching profiles:", error);
       setProfile([]);
    }
}
    
    useEffect(()=>{
        Gernateprofile(15)
        setWant("")
    },[])

    return(
        <>
        <div>
            <div className="numberof">             
                                                                                 {/* // yeh e apna event object hai , input form mai koi bhi change hoga wo e.target.value se nikal lenge                          */}
            <input type="number" placeholder="Enter Number of profiles you want" value={want} onChange={(e)=>setWant(e.target.value)}></input>
            <button onClick={()=>{Gernateprofile(Number(want));
                setWant("");   // this clean the input after work
            }}>Enter</button>
            </div>
           <div className="profiles">
            {/* Very Imprtant --- , yeh necche curly braces laga kar fir map likha kyo bcz , map js ka variable ya function hai and js ki chij ko curly braces ke andar likhna hota hai mere bahiiii*/}
            {
            profile.map((value)=>{
              return <div key={value.id} className="card">
                 <img src={value.avatar_url} alt="profile image" ></img>
                 <h2>{value.login}</h2>
                 <a href={value.html_url} target="blank">Github Profile</a>
              </div>
            })
            }
           </div>
           </div>
        </>
    )
}