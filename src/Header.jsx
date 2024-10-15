import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header({ showContact }) {

    const navigate = useNavigate();

    const handleBridgesChange = (event) => {
        const Bridges = event.target.value;
        navigate('/overview', { state: { Bridges } });
    };

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    Logo
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-nav" id="collapsibleNavbar">

                    <div className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Category</div>
                        <ul className="dropdown-menu filter">
                            <button className="dropdown-item" value="Historical Great Bridges" onClick={handleBridgesChange}>Historical Great Bridges</button>
                            <button className="dropdown-item" value="Iconic Bridges" onClick={handleBridgesChange}>Iconic Bridges</button>
                            <button className="dropdown-item" value="Modern Great Bridges" onClick={handleBridgesChange}>Modern Great Bridges</button>
                            <button className="dropdown-item" value="High-Level Achievement Bridges" onClick={handleBridgesChange}>High-Level Achievement Bridges</button>
                        </ul>
                    </div>

                    <div className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Continent Filter</div>
                        <ul className="dropdown-menu filter">
                            <button className="dropdown-item" value="Asia" onClick={handleBridgesChange}>Asia</button>
                            <button className="dropdown-item" value="Europe" onClick={handleBridgesChange}>Europe</button>
                            <button className="dropdown-item" value="Africa" onClick={handleBridgesChange}>Africa</button>
                            <button className="dropdown-item" value="North America" onClick={handleBridgesChange}>North America</button>
                            <button className="dropdown-item" value="South America" onClick={handleBridgesChange}>South America</button>
                            <button className="dropdown-item" value="Oceania" onClick={handleBridgesChange}>Oceania</button>
                        </ul>
                    </div>

                    <Link className="nav-item nav-link" to='/bridgelist'>List of Bridges</Link>

                    <button className="nav-item nav-link" onClick={showContact}>Contact Us</button>

                    <Link className="nav-item nav-link" to='/aboutus'>About Us</Link>

                </div>
            </div>
        </nav>
    );
}

export default Header;
