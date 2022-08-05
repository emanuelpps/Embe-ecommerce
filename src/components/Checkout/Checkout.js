import React, { useState } from 'react'
import { createBuyOrder } from '../../services/firestore';
import { Container } from 'react-bootstrap';
import useCartContext from '../Context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function Checkout() {
    const { cart, clearCart, getTotalProducts, totalPrice } = useCartContext();
    const [OrderID, setOrderID] = useState();
    
    // estados formulario
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    //  Estados para disparar msj de error
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrormsg] = useState(false);

    // Handle para el campo de nombre
  const handleNombre = (e) => {
    setNombre(e.target.value);
    setSubmitted(false);
  };


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };


  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };



  function handleBuy(){
    const itemsToBuy = cart.map((item) => ( {
        item: item,
        quantity: item.quantity,
        name: item.name,
        price: item.price,
        total: item.price * item.quantity,
    }
    ))

      const buyOrder = {
        buyer: {
          name: `${nombre}`,
          phone: `${phone}`,
          email: `${email}`,
        },
        items: itemsToBuy,
        total: totalPrice() ,
      }
      createBuyOrder(buyOrder).then(() => {
        
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada con éxito',
            text: 'Gracias por su compra',
            })
            
            
      })
      // SetTimeout para simular el proceso de validacion de la compra y posterior carrito vacio
      setTimeout(() => {
        clearCart();
        setOrderID(true);
      }, 2000);
            
    }


// verificacion de inputs

    function onlyLettersAndSpaces(str) {
      return /^[A-Za-z\s]*$/.test(str);
    }
    function containsArroba(str) {
      const tieneArroba = /@/;
      return tieneArroba.test(str);
    }

    function onlyNumbers(str) {
      return /^[0-9]+$/.test(str);
    }
    

  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!onlyLettersAndSpaces(nombre) || nombre === '' || !containsArroba(email) || email === '' || !onlyNumbers(phone) || phone === '') {
      setErrormsg(true);
    
      } else {
        setSubmitted(true);
        setErrormsg(false);
        handleBuy();
      }
    };


const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h4 className="bg-success text-white text-center">Procesando pago...</h4>
      </div>
    );
  };


  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: errorMsg ? '' : 'none',
        }}>
        <h4 className="bg-danger text-white text-center">Por favor ingrese datos validos</h4>
        
      </div>
    );
  };


    
        if (cart.length === 0) {
            return <section id="Carrito" className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-12">
                <p>No hay productos en su carrito</p>
                <Link to="/">Regresar a la pagina de inicio</Link>
              </div>
            </div>
          </section>
      }  return (
    <div className="container">
    <main>
      <div className="py-3 text-center">
        <h2>Checkout</h2>
        <p className="lead">Formulario de Pago</p>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-black">Su carrito</span>
            <span className="badge bg-dark bg-embe rounded-pill">{getTotalProducts()}</span>
          </h4>
          <ul className="list-group mb-3">
          {cart.map(item => (
            <Container key={item.id} className="list-group-item justify-content-between lh-sm"><li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{item.category} {item.name} x{item.quantity}</h6>
              </div>
              <span className="text-muted">${item.price}</span>
            </li>
            </Container>
          ))}
          <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0"><b>Total: ${totalPrice()}</b></h6>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Datos del cliente</h4>
          <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      
          <form className="needs-validation">
            <div className="row g-3">
              <div className="col-sm-12">
                <label htmlFor="firstName" className="form-label">Nombres y apellidos</label>
                <input onChange={handleNombre} value={nombre} type="text" className="form-control input" id="name" placeholder="Nombres y apellidos" required />
                <div className="invalid-feedback">
                  Nombre requerido
                </div>
              </div>
              
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                <input onChange={handleEmail} value={email} type="email" className="form-control input" id="email" placeholder="Su@email" required />
                <div className="invalid-feedback">
                  Por favor introduzca un email válido.
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input onChange={handlePhone} value={phone} type="phone" className="form-control input"  id="phone" placeholder="222446633" required />
                <div className="invalid-feedback">
                  Por favor ingrese su teléfono
                </div>
              </div>
            </div>
            <hr className="my-4" />

            <button onClick={handleSubmit} className="w-50 btn btn-primary btn-lg position-relative top-50 start-50 translate-middle mt-5" type="submit">Pagar</button>
          </form>
          
        </div>
      </div>
    </main>
  </div>
  
  )
}

export default Checkout