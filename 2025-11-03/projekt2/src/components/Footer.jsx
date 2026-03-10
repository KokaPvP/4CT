import Przycisk from "./Przycisk"

export default function Footer(props)
{
    return (
        <>
            <footer style={{backgroundColor:"purple",width:"100%",padding:"20px",textAlign:"center",color:"white"}}>
                {props.title}
                <Przycisk komunikat="Człowiek jest jak cegła" />
            </footer>
        </>
    )
}