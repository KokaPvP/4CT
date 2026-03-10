import { useContext, useEffect, useState } from "react"
import { UserName, Zdjecia } from "../App";

export default function Strona1()
{
    const userName = useContext(UserName);
    const zdjecia = useContext(Zdjecia);

    const [zdjecieId,setZdjecieId] = useState(0);
    const [zdjecieUrl,setZdjecieUrl] = useState("");

    useEffect(()=>{
        setZdjecieUrl(zdjecia[zdjecieId]);
    },[zdjecieId]);

    function Poprzednie()
    {
        setZdjecieId((v)=>(v-1)<0?zdjecia.length-1:v-1);
    }

    function Nastepne()
    {
        setZdjecieId((v)=>(v+1)%zdjecia.length);
    }

    return(
        <>
            <p>{userName}! to je twój szczyt!</p>
            <button onClick={()=>Poprzednie()}>Poprzednie</button>
            <img src={zdjecieUrl} />
            <button onClick={()=>Nastepne()}>Nastepne</button>
        </>
    )
}