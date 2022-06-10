import {useState} from 'react'



function ItemCount({stock, initial, onAdd}) {
  const [ count, modificarCount ] = useState(initial)
  function agregar() {
    if (stock > count) {
      modificarCount(count + 1)
    } else {
      alert("No disponemos de más productos")
    }
  }  
  function restar() {
    if (stock < count) {
      alert("No disponemos de productos")
    } else {
      modificarCount(count - 1)
    }
  }

  return (
    <>
    <h1>LA CANTIDAD ES = {count} </h1>
    <button onClick={restar}>-</button>
    <button onClick={agregar}>+</button>
    </>
)
}



export default ItemCount