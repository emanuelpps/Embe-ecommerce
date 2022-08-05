import './contacto.css';

const contacto = () =>{


    return (
        <section className='container'>
        <h1 className='text-center mt-4 mb-4'>Contacto</h1>
        <div class="card mb-3" /*style="max-width: 540px;"*/>
            <div class="row g-0">
                <div class="col-md-4">
                <img src="https://i.ibb.co/ysZv8jd/home-contacto-1.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-4 ">
                <div class="card-body card-body-text position-absolute top-0 start-50">
                    <h5 class="card-title">SHOP ONLINE</h5>
                    <p class="card-text">Envianos un mail a:</p>
                    <p class="card-text">ventaonline@embe.com.ar</p>
                    <p class="card-text">+54 11 5252-0250 int. 112 o 114 - WhatsApp: +54 11 2529 0290</p>
                    <p class="card-text"><small class="text-muted">Lunes a Viernes de 09:00 a 17:00 hs.</small></p>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default contacto;