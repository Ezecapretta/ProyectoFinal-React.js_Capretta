import logo from '../../assets/img/favicon.jpg';
import CartWidget from './CartWidget.js';

function NavBar() {
    return(
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
            {/* <a className="navbar-brand" href="#"> */}
                <img className="logo" src={logo} alt=""/>
            {/* </a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">Inicio</a> */}
                        <button className="button-navbar">Inicio</button>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">Notebooks</a> */}
                        <button className="button-navbar">Notebooks</button>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">PC De Escritorio</a> */}
                        <button className="button-navbar">PC De Escritorio</button>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="#">Ofertas</a> */}
                        <button className="button-navbar">Ofertas</button>
                    </li>
                </ul>
            </div>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar;