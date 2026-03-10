export default function Przycisk(komunikat)
{
    return (
        <>
            <button onClick={()=>alert(komunikat.komunikat)}>
                Tu klikać
            </button>
        </>
    )
}