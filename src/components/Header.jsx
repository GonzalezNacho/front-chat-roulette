import LogoutButton from "./Logout"
import LoginButton  from "./Login"
import { useAuth0 } from "@auth0/auth0-react";

export function Header () {

    const { user, isAuthenticated } = useAuth0();

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
                    {
                        isAuthenticated ? (
                            <> 
                                {/*<img src={user.picture} alt={user.name} />*/}
                                <h4>{user.name}</h4>
                                {/*<p>{user.email}</p>*/} 
                                <LogoutButton/>
                            </>
                        ) : (
                            <LoginButton/>
                        )
                    }
                </div>        
            </header>
        </>
    )
}