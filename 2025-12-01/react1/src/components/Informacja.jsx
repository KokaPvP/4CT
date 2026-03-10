import { useContext } from "react";
import { NazwaMotywu } from "../App";

export default function Informacja()
{
    const motyw = useContext(NazwaMotywu);

    return(
        <>
            <p>Jesteś zerem {motyw=="ciemny"?"czarnym":"białym"} żołnierzem</p>
        </>
    )
}