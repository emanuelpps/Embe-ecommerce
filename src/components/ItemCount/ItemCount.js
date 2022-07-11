import './ItemCount.css';
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';




export const ItemCount = ({ onAdd }) => {

let stock = 3;
  
  const [num, setNum] = useState(1);

  useEffect(() => {
    //console.log("Mount");
  }, []);


  useEffect(() => {
    //console.log("change");
  }, [num])


    


    const clickSuma = () => {
      if(num < (stock)){
        setNum(num + 1)
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El producto se encuentra sin stock',
          })
        }
    };

    const clickResta = () => {
      if (num > 1)
        setNum (num - 1)
        
      } 
    

    const reset = () =>{
        setNum(1)
    }
    

    
  return (
  <div class="container py-5">
    <div class="row">
           <div>
              <p>{num}</p>
              <button type="button" class="btn btn-primary flex-fill ms-1" onClick={clickSuma} disabled={num === stock ? true : null}>+</button>
              <button type="button" class="btn btn-danger flex-fill ms-1" onClick={clickResta}>-</button>
              <button type="button" class="btn btn-warning flex-fill ms-1" data-mdb-ripple-color="dark" onClick={reset}>Reset</button>
            </div>
            <div>
            <button type="button" className='btn btn-primary mt-3' onClick={() => onAdd (num)}>Agregar Al Carrito</button>
            </div>
          </div>
        </div>
  );
}

export default ItemCount;
