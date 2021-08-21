import Search from 'component/search/Search';
import logo from 'logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light p-0">
            <div className="container">
                <Link className="navbar-brand mb-0 h1" to="/">
                    <img src={logo} alt="blog logo" width="30" height="28" className="d-inline-block align-text-top" />
                    BlogLogo</Link>
                <button className="navbar-toggler btn-sm px-1 py-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                    </ul>
                    <Search />
                </div>
            </div>
        </nav>
    )
}

export default Header;