import { Bienvenido } from "./Bienvenida"
import { Chat } from "./Chat"
import { Contacto } from "./Contacto"

export function ControladorContenido ({contenido}) {

    if (contenido == 'Bienvenida') return <Bienvenido/>

    if (contenido == 'Chat') return <Chat/>

    if (contenido == 'Contacto') return <Contacto/>
}