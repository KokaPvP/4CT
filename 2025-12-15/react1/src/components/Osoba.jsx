import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

export default function Osoba()
{
    const [imgId,setImgId] = useState(237)

    useEffect(()=>{
        PrzeladujZdjecie()
    },[])

    function PrzeladujZdjecie()
    {
        let wynik;
        do
        {
            wynik = 237 + Math.round(Math.random()*100);
        } while([245,246,262,285,286,298,303,332,333].includes(wynik));
        setImgId(wynik);
    }

    return(
        <div className="Osoba">
            <h3>{faker.person.fullName()} : {faker.internet.emoji()}</h3>
            <p>{faker.internet.email()}</p>
            <img src={`https://picsum.photos/id/${imgId}/300/200`}/>
        </div>
    )
}