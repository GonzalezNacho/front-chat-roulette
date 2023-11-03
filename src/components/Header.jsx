import { useEffect } from "react"

export function Header ({setContenido}) {

    useEffect(() => {

    },[])
    
    const handleClick = (contenido) => {
        setContenido(contenido)
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src='src/assets/img/chatW.png' alt="logo"/>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a onClick={handleClick('Bienvenida')}>Inicio</a></li>
                        <li><a onClick={handleClick('Chat')}>Chatear</a></li>
                        <li><a onClick={handleClick('Contacto')}>Contacto</a></li>
                    </ul>
                    
                </nav>
                <div className="botones">
                    <a href="ingresar.html" className="btn"><button>ingresar</button></a>
                    <a href="registro.html" className="btn"><button>registrarse</button></a>
                </div>        
            </header>
        </>
    )
}