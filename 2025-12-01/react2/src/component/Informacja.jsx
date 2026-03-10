import { useContext } from "react";
import { AppData } from "../App";

export default function Informacja()
{
    const {stronamocy,userName} = useContext(AppData)

    return(
        <>
            <p>{userName}! {stronamocy=="ciemna"?"Powiedz co poszło nie tak?":"Jesteś super, nie zmieniaj sie"}</p>
        </>
    )
}