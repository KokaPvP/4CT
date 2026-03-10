import { useContext } from "react"
import { Motyw } from "../App"

export default function Main()
{
    const motyw = useContext(Motyw);

    return(
        <>
            <main className={motyw}>
                <p>To jest sekcja główna. useContext robi brrrr</p>
            </main>
        </>
    )
}