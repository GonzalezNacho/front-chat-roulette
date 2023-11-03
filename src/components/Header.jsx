import { useEffect } from "react"

export function Header () {

    
    const handleClick = (contenido) => {
        alert(contenido)
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src='src/assets/img/chatW.png' alt="logo"/>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/chat">Chatear</a></li>
                        <li><a href="/contacto">Contacto</a></li>
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