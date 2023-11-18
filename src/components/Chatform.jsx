import axios from 'axios'
import { useMessages } from '../hooks/useMessages'

export function Chatform ({nickname, socket}) {

    const {message, messages, setMessage, setMessages, url } = useMessages(socket)
    const handlerSubmit = e => {
            e.preventDefault()
        
            socket.emit('message', message, nickname)
    
            const newMessage = {
                body:message,
                from:'Yo'
            }
    
            setMessages([newMessage,...messages])
            setMessage('')
    
            //Petición HTTP por POST para guardar el mensaje
    
            axios.post( url + 'save', {
                messages: message,
                from: nickname
            })
            alert('se envio un mensaje')
        }

    return (
        <form onSubmit={handlerSubmit}>
            <div className='d-flex'>
                <input type="text" className='form-control' placeholder='Mensaje...' id='message-input' onChange={e => setMessage(e.target.value)} value={message}/>
                <button className='btn btn-success mx-3' type='submit' id='btn-message'>Enviar</button>
            </div>
        </form>
    )
}