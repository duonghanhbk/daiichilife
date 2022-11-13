const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
            <a href="index.html" className="navbar-brand d-flex align-items-center">
                <h1 className="m-0">
                    <img className="img-fluid me-3" src="img/icon/icon-02-primary.png" alt="" />
                    Insure
                </h1>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
                    <a href="index.html" className="nav-item nav-link">
                        Home
                    </a>
                    <a href="about.html" className="nav-item nav-link">
                        About Us
                    </a>
                    <a href="service.html" className="nav-item nav-link">
                        Our Services
                    </a>
                    <div className="nav-item dropdown">
                        <a href="#/" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">
                            Pages
                        </a>
                        <div className="dropdown-menu bg-light border-0 m-0">
                            <a href="feature.html" className="dropdown-item active">
                                Features
                            </a>
                            <a href="appointment.html" className="dropdown-item">
                                Appointment
                            </a>
                            <a href="team.html" className="dropdown-item">
                                Team Members
                            </a>
                            <a href="testimonial.html" className="dropdown-item">
                                Testimonial
                            </a>
                            <a href="404.html" className="dropdown-item">
                                404 Page
                            </a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">
                        Contact Us
                    </a>
                </div>
            </div>
            <a href="#/" className="btn btn-primary px-3 d-none d-lg-block">
                Get A Quote
            </a>
        </nav>
    )
}

export default Header
