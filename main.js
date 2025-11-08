import React , {useCallback, useState , useEffect} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/header";
import Body from "./src/body";
import Individal from "./src/searchprofile";
import "./design.css";
function Githubprofile()
{
    return(
        <>
            <Header></Header>
            <Body></Body>
            <Individal></Individal>
            
        </>
    )
}
ReactDOM.createRoot(document.getElementById("profile")).render(<Githubprofile></Githubprofile>);