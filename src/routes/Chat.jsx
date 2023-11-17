/*export function ChatViejo() {
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
}*/

import io from 'socket.io-client'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Chatform } from '../components/Chatform'
import { Messages } from '../components/Messages'
import { useAuth0 } from "@auth0/auth0-react";


//Conexion para escuchar y enviar los eventos

const socket = io('http://localhost:4001')

export function Chat() {

    const { user, isLoading } = useAuth0();
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const [storedMessages, setStoredMessages] = useState([])
    const [firstTime, setFirstTime] = useState(false)
    

    const url = 'http://localhost:4001/api/'

    useEffect(()=> {
        const receivedMessage = (message) => {
        setMessages([message, ...messages])
        }

        socket.on('message', receivedMessage)

        return () => {
        socket.off('message', receivedMessage)
        }
    }, [messages])

    if(!firstTime) {
        axios.get(url +'messages').then(res => {
        let messagesDb = res.data.messages
        setStoredMessages(messagesDb)
        })
        setFirstTime(true)
    }

    console.log(user)
    return (
            isLoading ? <p>cargando ...</p> :
            <>
            <div className='App'>
                <div className='container mt-3'>
                <div className='card'>
                    <div className='card-body'>
                    <h2 className='text-center'>chat</h2>
                    <Chatform nickname={user.name} message={message} messages={messages} setMessage={setMessage} setMessages={setMessages} socket={socket} url={url}/>
                    </div>
                </div>

                {/* Chat messages */}

                <div className='card mt-3 mb-3' id='content-chat'>
                        <Messages messages={messages}/>
                        <small className='text-center text-muted p-3'>... Mensajes guardados ...</small>
                        <Messages messages={storedMessages} nickname={user.name}/>
                </div>
                </div>
            </div>
            </>
    )
}
