import './ItemCount.css';
import {useState, useEffect } from "react";
import Swal from 'sweetalert2';




export const ItemCount = ({ onAdd, stock }) => {


  
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
          <div className="d-flex justify-content-center">
              <button type="button" class="btn btn-light btn-size" onClick={clickSuma} disabled={num === stock ? true : null}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button>
              <p className="align-self-center pt-3">{num}</p>
              <button type="button" class="btn btn-light btn-size" onClick={clickResta}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg></button>
              
            </div>
      
            <div>
            <button type="button" class="btn btn-secondary ms-1 mt-3 mx-3" data-mdb-ripple-color="dark" onClick={reset}>Reset</button>
            <button type="button" className='btn btn-success mt-3' onClick={() => onAdd (num)}>Agregar Al Carrito</button>
            </div>
          </div>
        </div>
  );
}

export default ItemCount;
