import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AccountTree } from '@mui/icons-material';

function SiteMap({ Close }) {
    const navigate = useNavigate();  // Hook to programmatically navigate to different routes

    // Handle navigation when filtering bridges by category on the homepage
    const handleFilterChange = (event) => {
        const Bridges = event.target.value;
        localStorage.setItem('Bridges', Bridges);  // Save Bridges in localStorage
        navigate('/', { state: { Bridges } }); // Navigate to homepage with the selected filter
        Close();
    };

    // Handle navigation to the overview page with the selected bridge category/continent
    const handleBridgesChange = (event) => {
        const Bridges = event.target.value;
        localStorage.setItem('Bridges', Bridges);  // Save Bridges in localStorage
        navigate('/overview', { state: { Bridges } });  // Navigate to the overview page with the selected category
        Close();
    };

    // Handle navigation to the Gallery page with the selected gallery type (Image or Video)
    const handleGalleryChange = (event) => {
        const Gallery = event.target.value;
        localStorage.setItem('Gallery', Gallery);  // Save Gallery in localStorage
        navigate('/Gallery', { state: { Gallery } });
        Close();
    };

    return (
        <div className="con-modal">
            <div className="form-siteMap">
                {/* Close button to close the site map modal */}
                <div className="btn-detail">
                    <button type="button" className="btn" onClick={Close}>
                        <CloseIcon />
                    </button>
                </div>

                {/* Title for the site map */}
                <div className='title-siteMap'>
                    <h1><AccountTree style={{ fontSize: '1em' }} /> Site Map :</h1>
                </div>

                <div className='body-siteMap row'>
                    {/* Navigation links for Outstanding Bridges section */}
                    <div className="col-xxl-3 col-lg-4 col-md-6">
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            <h2 style={{ color: '#dc3545' }}>Home</h2>
                        </Link>
                        <ul>
                            <li><h5 style={{ fontWeight: 'bold' }}>Outstanding Bridges</h5></li>
                            <li>
                                <ul>
                                    {/* Filter buttons for each bridge category */}
                                    <li><h6>
                                        <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleFilterChange} value="International Bridges">
                                            International Bridges
                                        </button>
                                    </h6></li>
                                    <li><h6>
                                        <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleFilterChange} value="Asia">
                                            Asia
                                        </button>
                                    </h6></li>
                                    <li><h6>
                                        <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleFilterChange} value="Europe">
                                            Europe
                                        </button>
                                    </h6></li>
                                    <li><h6>
                                        <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleFilterChange} value="Africa">
                                            Africa
                                        </button>
                                    </h6></li>
                                    <li><h6>
                                        <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleFilterChange} value="North America">
                                            North America
                                        </button>
                                    </h6></li>
                                    <li><h6>
                                        <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleFilterChange} value="South America">
                                            South America
                                        </button>
                                    </h6></li>
                                    <li><h6>
                                        <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleFilterChange} value="Oceania">
                                            Oceania
                                        </button>
                                    </h6></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation links for bridge categories */}
                    <div className="col-xxl-3 col-lg-4 col-md-6">
                        <h2 style={{ color: '#dc3545' }}>Category</h2>
                        <ul>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="Historical Great Bridges">
                                    Historical Great Bridges
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="Iconic Bridges">
                                    Iconic Bridges
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="Modern Great Bridges">
                                    Modern Great Bridges
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="High-Level Achievement Bridges">
                                    High-Level Achievement Bridges
                                </button>
                            </h6></li>
                        </ul>
                    </div>

                    {/* Navigation links for bridge continents */}
                    <div className="col-xxl-3 col-lg-4 col-md-6">
                        <h2 style={{ color: '#dc3545' }}>Continent</h2>
                        <ul>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="Asia">
                                    Asia
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="Europe">
                                    Europe
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="Africa">
                                    Africa
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="North America">
                                    North America
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="South America">
                                    South America
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleBridgesChange} value="Oceania">
                                    Oceania
                                </button>
                            </h6></li>
                        </ul>
                    </div>

                    {/* Link to the bridge list page */}
                    <div className="col-xxl-3 col-lg-4 col-md-6">
                        <h2>
                            <button style={{ background: 'none', color: '#dc3545', fontWeight: 'bolder' }} value="International Bridges" onClick={handleBridgesChange}>
                                Bridges
                            </button>
                        </h2>
                    </div>

                    {/* Navigation links for Gallery section */}
                    <div className="col-xxl-3 col-lg-4 col-md-6">
                        <h2 style={{ color: '#dc3545' }}>Gallery</h2>
                        <ul>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleGalleryChange} value="Image">
                                    Image
                                </button>
                            </h6></li>
                            <li><h6>
                                <button style={{ background: 'none', color: 'white', fontWeight: 'bold' }} onClick={handleGalleryChange} value="Video">
                                    Video
                                </button>
                            </h6></li>
                        </ul>
                    </div>

                    {/* Link to the About Us page */}
                    <div className="col-xxl-3 col-lg-4 col-md-6">
                        <Link to='/aboutus' onClick={Close} style={{ textDecoration: 'none' }}>
                            <h2 style={{ color: '#dc3545' }}>About Us</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SiteMap;
