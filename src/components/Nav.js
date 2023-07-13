import './css/Nav.css'

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-black c-nav ">
  <div className="container-fluid">
    <a className="navbar-brand text-warning" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Link</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 bg-black PH" type="search" placeholder="Search Here ..." aria-label="Search" />
        <button className="btn btn-outline-warning text-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}
export default Nav;