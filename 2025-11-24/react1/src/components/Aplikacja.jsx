import { useState } from "react";

export default function Aplikacja()
{
    const [inputValue,setInputValue] = useState("");
    const [toDoList,setToDoList] = useState([]);

    return(
        <>
            <div>
                <input type="text" id="inpucik" onChange={(e)=>setInputValue(e.target.value)}/>
                <button onClick={()=>setToDoList([...toDoList,inputValue])}>Dodaj do listy</button>
            </div>
            <hr />
            <ul>
            {
                toDoList.map((el,i)=>(
                    <li key={i}>
                        {el}
                    </li>
                ))
            }
            </ul>
        </>
    )
}