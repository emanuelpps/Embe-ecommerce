import './ItemCount.css';
import { useState } from "react";
import Swal from 'sweetalert2'


function ItemCount({ stock }) {
    
    const [num, setNum] = useState(0);

    const sumar = () =>{
        if(num < stock){
        setNum(num + 1)
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El producto se encuentra sin stock',
          })
        }
    }

    const vaciar = () =>{
        setNum(0)
    }
    

    
 
}

export default ItemCount;
