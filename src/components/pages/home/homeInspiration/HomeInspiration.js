import './HomeInspiration.css';

const HomeInspiration = () => {

    return(
        <>
        <h3 className='text-center'> Home Inspirations </h3>
        <section className='sectionBody'>
            <div class= 'containerHomeInspiration'>
                <div class= 'cardHomeInspiration'>
                <div class= 'image'>
                    <img src='https://i.postimg.cc/6Q8mt28m/Home-inspiration-1.jpg' alt=''/>
                </div>
                <div class= 'content'>
                    <h3>HOME DREAMS</h3>
                    <p>Funda de edredón Waffle y Manta Rabbit, un toque fino y delicado en esta nueva colección Home Collection.  </p>
                </div>
                </div>    
            </div>
            <div class= 'containerHomeInspiration'>
                <div class= 'cardHomeInspiration'>
                <div class= 'image'>
                    <img src='https://i.postimg.cc/kMQhJd5q/Home-inspiration-2.jpg' alt=''/>
                </div>
                <div class= 'content'>
                    <h3>HOME WINTER</h3>
                    <p>Prepará tu hogar para esta nueva temporada con nuestros productos exclusivos y detalles increibles</p>
                </div>
                </div>    
            </div>
        </section>
        </>
    )
};


export default HomeInspiration;