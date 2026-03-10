import { useState } from "react";

export default function Odejmowanie()
{
    const [liczba1,setLiczba1] = useState(0);
    const [liczba2,setLiczba2] = useState(0);

    return (
        <>
            <h2>Odejmowanie 2 liczb</h2>
            <hr />
            <input onChange={(e)=>setLiczba1(e.target.value)} placeholder="liczba1" />-
            <input onChange={(e)=>setLiczba2(e.target.value)} placeholder="liczba2" /> 
            = {parseFloat(liczba1) - parseFloat(liczba2)}
        </>
    );
}