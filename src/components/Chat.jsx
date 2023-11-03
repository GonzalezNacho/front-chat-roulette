export function Chat() {
    return (
        <>
            <h1>Sala de chat</h1>
            <section className="chat-box">
                <div className="messages">
                    <div className="message left">
                        <div className="user-image">
                            <img src="src/assets/img/user1.png" alt="User 1"/>
                        </div>
                        <div className="message-content">
                            <p>Hola que onda </p>
                        </div>
                    </div>
                    <div className="message right">
                        <div className="message-content">
                            <p>bien y vos ?</p>
                        </div>
                        <div className="user-image">
                            <img src="src/assets/img/user1.png" alt="User 2"/>
                        </div>
                    </div>
                </div>
                <div className="input-area">
                    <input type="text" placeholder="Escribe tu mensaje..."/>
                    <button>Enviar</button>
                    <button className="NEXT">NEXT CHAT</button>
                </div>
            </section>
        </>
    )
}