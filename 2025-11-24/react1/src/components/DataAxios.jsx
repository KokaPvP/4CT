import axios from "axios";
import { useEffect, useState } from "react"

export default function DataAxios()
{
    const [danefromApi,setDaneFromApi] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res=> setDaneFromApi(res.data));
    },[])

    return(
        <>
            <div>
                <ul>
                    {
                        danefromApi.map((el,i)=>(
                            <li key={i}>
                                {el.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}