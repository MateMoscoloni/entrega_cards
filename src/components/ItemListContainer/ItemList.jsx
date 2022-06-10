import { useEffect, useState } from "react"
import getFetch from "../helpers/getFetch"
import Item from "./Item"



const ItemList= () => {
  const [prod, setProductos] = useState([])
  const [loading, setLoading] = useState(true) 

  useEffect(()=>{
    getFetch()
    .then((resp) => {
      setProductos(resp)
    })
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])


  return (
    <>
      { loading ?
        <h2>Cargando...</h2>
      :
       prod.map(producto => <Item id={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
      )}
    </>
  )
}
export default ItemList

