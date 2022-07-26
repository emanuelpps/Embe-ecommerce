import React, { useState, useContext } from "react";
import { buyingOrder } from "../../services/firestore";
import {  Badge, Container } from 'react-bootstrap';
import {CartContext} from '../Context/CartContext'
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
//import { doc, setDoc } from "firebase/firestore";
//import CartList from "components/Cart/CartList";



const Checkout = () => {

    const { cart, clearCart, getTotal, total } = useContext(CartContext);
    const [OrderID, setOrderID] = useState();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [payment, setPayment] = useState('');
    const [submit, setSubmit] = useState('');


    const nameHandler = (e) =>{
        setName(e.target.value);
        setSubmit(false);
    };
    
    const emailHandler = (e) =>{
        setEmail(e.target.value);
        setSubmit(false);
    };

    const phoneHandler = (e) => {
        setPhone(e.target.value);
        setSubmit(false);
    };

    const paymentHandler = (e) =>{
        setPayment(e.target.value);
        setSubmit(false);
    };


    function buyingHandler(){
        const itemOrders = cart.map((items) => ({
            id: items.id,
            quantity: items.quantity,
            name: items.name,
            price: items.price,
            total: items.price * items.quantity,
        }
        ))

        const sendOrder = {
            buyer:{
                name: {name},
                phone: {phone},
                email: {email},
            },
            items: itemOrders,
            total: getTotal(),
        }
        buyingOrder(sendOrder).then(Response => {
            /*Swal.fire({
                icon: 'success',
                title: `Su compra fue realizada con exito! Su N de orden es: ${Response}`,
                text: 'Muchas Gracias por su compra',
                }) */
        })

        setTimeout(() => {
            clearCart();
            setOrderID(true);
        }, 2000);
    }

if (OrderID){
            return(
            <section id="carrito" className="py-2 text-center container slide-in-fwd-center">
            <div className="row py-lg-2">
            <div><Badge bg="info" className="m-1"><h6>Su N° de pedido es:{OrderID}</h6></Badge><Badge className="m-3" bg="info"><h6> Costo Total: {getTotal()} $</h6></Badge>
            <div><Link to="/">Regresar a la página de Inicio</Link></div> 
            </div>
            </div>
        </section>
        )} else
    return (
        <section className="container">
        <div className="row">
            <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Tu Carrito</span>
                    <span class="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul class="list-group mb-3">
                {cart.map(item => (
                    <Container>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">{item.name}</h6>
                        </div>
                        <span class="text-muted">{item.price}</span>
                    </li>
                    </Container>
                ))}
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total</span>
                        <strong>${total}</strong>
                    </li>
                    </ul>
                
            </div>
            <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Ingresa tus datos para completar tu compra</h4>
                <form class="needs-validation" novalidate=""/>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">Nombre y Apellido</label>
                            <input type="text" class="form-control" id="Name" placeholder="" value={name} onChange={nameHandler} required=""/>
                            <div class="invalid-feedback"> Valid first name is required. </div>
                        </div>
                        <div class="col-md-6 mb-3">
                        <label for="lastName">Numero de Telefono</label>
                        <input type="text" class="form-control" id="phone" placeholder="" value={phone} onChange={phoneHandler} required=""/>
                        <div class="invalid-feedback"> Valid last name is required. </div>
                        </div>
                        </div>
                    <div class="mb-3">
                        <label for="email">Email <span class="text-muted">(Optional)</span></label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com" value={email} onChange={emailHandler}/>
                        <div class="invalid-feedback"> Por favor ingresa un mail valido. </div>
                    </div>
                    
                    <hr class="mb-4"/>
                    <h4 class="mb-3">Forma de pago</h4>
                    <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" value={payment} onChange={paymentHandler} required=""/>
                            <label class="custom-control-label" for="credit">Tarjeta de Credito</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" value={payment} onChange={paymentHandler} required=""/>
                            <label class="custom-control-label" for="debit">Debito</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" value={payment} onChange={paymentHandler} required=""/>
                            <label class="custom-control-label" for="paypal">PayPal</label>
                        </div>
                    </div>
                    <hr class="mb-4"/>
                    <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={buyingHandler}>Realizar Pedido</button>
            </div>
        </div>
    </section>
    );
};

export default Checkout;