import { useContext } from "react";
import { Motyw } from "../App";

export default function Footer()
{
    const motyw = useContext(Motyw);

    return(
        <>
            <footer className={motyw}>
                <p>Stopka aplikacji - obecny motyw: {motyw}</p>
            </footer>
        </>
    )
}