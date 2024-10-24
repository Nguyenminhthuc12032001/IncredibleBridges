import { NavLink, useNavigate } from 'react-router-dom';

function Header({ showContact }) {
    const navigate = useNavigate();  // Hook to programmatically navigate to different routes

    // Handle dropdown selection for bridges categories and continents
    const handleBridgesChange = (event) => {
        const Bridges = event.target.value;
        navigate('/overview', { state: { Bridges } });  // Navigate to the overview page with selected bridge category/continent
    };

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                {/* Logo link to home page */}
                <NavLink className="navbar-brand" to='/'>
                    <img src={`${process.env.PUBLIC_URL}/logo/logo.png`} className='logo' alt="logo" />
                </NavLink>

                {/* Navbar toggle button for smaller screens */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar-nav" id="collapsibleNavbar">
                    {/* Dropdown for bridge categories */}
                    <div className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Category</div>
                        <ul className="dropdown-menu filter">
                            <button className="dropdown-item" value="Historical Great Bridges" onClick={handleBridgesChange}>Historical Great Bridges</button>
                            <button className="dropdown-item" value="Iconic Bridges" onClick={handleBridgesChange}>Iconic Bridges</button>
                            <button className="dropdown-item" value="Modern Great Bridges" onClick={handleBridgesChange}>Modern Great Bridges</button>
                            <button className="dropdown-item" value="High-Level Achievement Bridges" onClick={handleBridgesChange}>High-Level Achievement Bridges</button>
                        </ul>
                    </div>

                    {/* Dropdown for bridge continents */}
                    <div className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Continent</div>
                        <ul className="dropdown-menu filter">
                            <button className="dropdown-item" value="Asia" onClick={handleBridgesChange}>Asia</button>
                            <button className="dropdown-item" value="Europe" onClick={handleBridgesChange}>Europe</button>
                            <button className="dropdown-item" value="Africa" onClick={handleBridgesChange}>Africa</button>
                            <button className="dropdown-item" value="North America" onClick={handleBridgesChange}>North America</button>
                            <button className="dropdown-item" value="South America" onClick={handleBridgesChange}>South America</button>
                            <button className="dropdown-item" value="Oceania" onClick={handleBridgesChange}>Oceania</button>
                        </ul>
                    </div>

                    {/* Button to show all bridges */}
                    <button className="nav-item nav-link" value="International Bridges" onClick={handleBridgesChange}>
                        Bridges
                    </button>

                    {/* Nav links to gallery and about us pages */}
                    <NavLink className="nav-item nav-link" to='/gallery'>Gallery</NavLink>

                    <NavLink className="nav-item nav-link" to='/aboutus'>
                        About Us
                    </NavLink>

                </div>
            </div>
        </nav>
    );
}

export default Header;
