import { useContext } from "react";
import { Motyw } from "../App";

export default function Header()
{
    const mot = useContext(Motyw);

    return(
        <>
            <header className={mot}>
                <h1>Moja aplikacja (Żrący motyw: {mot})</h1>
            </header>
        </>
    )
}