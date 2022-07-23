import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav>
                <div className='RFD'>
                    RFD
                </div>
            <ul class='menu'>
                <button className='boton'>Inicio</button>
                <button className='boton'>Diseños</button>
                <button className='boton'>Contacto</button>
              </ul>
              <CartWidget />
        </nav>
    )
}

export default Navbar