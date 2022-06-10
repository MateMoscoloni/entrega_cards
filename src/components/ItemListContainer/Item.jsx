import ItemList from "./ItemList";
import getFetch from "../helpers/getFetch"


export default function Item({id, nombre, precio, imagen}) {
    return (
        <div className='card'  style={{"width":"18rem", "height":"10rem"}} key={id}>
        <img className='card-img-top' src={imagen} alt="Card image cap"/>
        <div className='card-body'>
          <h5 className='card-title'> {nombre} </h5>
          <p className='card-text'> $  {precio} </p>
          <button href="#" className='btn btn-primary btn-dark'><a className='card-text' href="">Añadir al carrito</a></button>
        </div>
      </div>
    )
}

