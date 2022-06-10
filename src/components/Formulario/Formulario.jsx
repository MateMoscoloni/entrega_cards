import Titulo from "../Titulo/Titulo"

const Formulario = () => {
    return (
        <form className="form-control">
            <Titulo titulo={'Titulo del form'} subtitulo='subtitulo del form'/>
            <input type="text" />
            <button>Enviar</button>
        </form>
    )
}
export default Formulario