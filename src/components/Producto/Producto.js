import React from 'react';
import './Producto.css';
import {Link} from 'react-router-dom';

const Producto = (props) => {
  const {imagen, nombre, precio, id} = props.infoProducto;
  return ( 
    <li>
      <img src={`img/${imagen}.png`} alt = {nombre}/>
      <p>{nombre} <span> $ {precio}</span></p>
      <Link to={`/producto/${id}`}>Mas informacion</Link>
    </li>
   );
}
 
export default Producto;