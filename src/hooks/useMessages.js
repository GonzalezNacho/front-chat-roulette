import axios from 'axios'
import { useState, useEffect } from 'react'

export function useMessages( {socket} ) {
    
    const url = 'http://localhost:4001/api/'
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const [storedMessages, setStoredMessages] = useState([])
    const [firstTime, setFirstTime] = useState(false)
 
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

    return { message, setMessage, messages, setMessages, storedMessages, url}
}