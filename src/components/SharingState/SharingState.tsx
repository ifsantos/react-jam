import './SharingState.css'

export function SharingState({nome, onUpdate}:{nome:string, onUpdate:any}){

    return (
        <div className='textBox'>
            <h1>Bem vindo {nome}!</h1>
            <p>Outstanding app with state sharing</p>
            <input value={nome} onChange={(event) => onUpdate(event.target.value)}></input>
        </div>
    ); 

}