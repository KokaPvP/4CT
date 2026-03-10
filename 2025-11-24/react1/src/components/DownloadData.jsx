import { useEffect, useState } from "react"

export default function DownloadData()
{
    const [danefromApi,setDaneFromApi] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res=>res.json())
        .then(data=>setDaneFromApi(data));
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