const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid float-right">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">ABOUT </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://openweathermap.org/" target='_blank'>API </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar