let productos = [
    {id:0, nombre: "caprichosa", precio: "1100", imagen: <img width="30" height="30" className="d-inline-block align-top" src={process.env.PUBLIC_URL + "/images/carrocompra.png"}  /> },
    {id:1, nombre: "chingadazo", precio: "1300", imagen: <img width="30" height="30" src={process.env.PUBLIC_URL + "/images/chingadazo.png"} /> },
    {id:2, nombre: "gringa", precio: "1100", imagen: <img width="30" height="30" src={process.env.PUBLIC_URL + "/images/gringa.png"} /> },
    {id:3, nombre: "parrillera", precio: "1200", imagen: <img width="30" height="30" src={process.env.PUBLIC_URL + "/images/parrillera.png"} /> }
]

const getFetch = () => {

return new Promise((res, rej) =>{
    setTimeout(() => {
        res(productos)
    }, 2000)
    
    })
 }

export default getFetch
