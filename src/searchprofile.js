import { useEffect, useState } from "react";
export default function Individal(){
    
    const [search , setSearch] = useState("");  // FOR FETCH DATA 
    const [need , setNeed] = useState("");     // FOR BUTTON

    async function Searchprofile(profile_name) {
        try{
        const response = await fetch(`https://api.github.com/users/${profile_name}`);

        if(!response.ok){
           alert("Username not found ");
           return;
        }

        const data = await response.json()
        setSearch(data)
        }
        catch(error)
        {
            alert("Something went wrong. Please try again later.");
            console.error(error);
        }
    } 
    
    useEffect(()=>{
        Searchprofile("rkshivam")
    },[]);

    return(
        <>
        <div className="github">
            
         <div className="prof">
            <input type="text" placeholder="Enter username Like -> rkshivam" value={need} onChange={(e)=>setNeed(e.target.value)}></input>
            <button onClick={()=>{Searchprofile(need);
                setNeed("");
            }}>Enter</button>
        </div>
        {
        
         <div>
           <img src={search.avatar_url} />
           <div className="profile-details">
           <h3>{search.name}</h3>
           <p>{search.login}</p>
           <a href={search.html_url}>GitHub Profile</a>
           <p>{search.location}</p>
         </div>
        </div>

        }
        </div>
        </>
    )
}
