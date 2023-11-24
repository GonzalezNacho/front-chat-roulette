export function Roulette() {

    const handleClickUnirse = () => {
        alert('unirse')
    }
    
    const handleClickCrear = () => {
        alert('crear sala')
    }

    return (
        <>
            <h1>Elige una opicion</h1>    
            <section className="conteiners-divs">
                <div id="crear-sala" onClick={handleClickCrear}>
                    <h1>Crer Sala</h1>
                    <p>Seras el unico participante hasta que ingrese otro usuario</p>
                </div>
                <div id="unirse" onClick={handleClickUnirse}>
                    <h1>Unirse</h1>
                    <p>Unirse a una sala ya existente</p>
                </div>
            </section>
        </>
    )
}