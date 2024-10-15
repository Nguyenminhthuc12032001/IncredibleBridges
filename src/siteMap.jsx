import CloseIcon from '@mui/icons-material/Close';
function SiteMap({ Close }) {
    return (
        <div className="con-modal">
            <div className="form-siteMap">
                <div className="btn-detail">
                    <button type="button" className="btn" onClick={Close}>
                        <CloseIcon />
                    </button>
                </div>
                <div className='title-siteMap' style={{ color: '#212529', width: '100%', backgroundColor: 'white' }}><h1>Site Map :</h1></div>
                <div className='body-siteMap row'>
                    <div className="col-lg-4">
                        <h2  style={{ color: '#dc3545' }}>Home</h2>
                        <ul>
                            <li><h5 style={{ fontWeight: 'bold' }}>Outstanding Bridges</h5></li>
                            <li>
                                <ul>
                                    <li><h6>All</h6></li>
                                    <ul>
                                        <li><p>Card Bridges</p></li>
                                    </ul>
                                    <li><h6>Asia</h6></li>
                                    <ul>
                                        <li><p>Card Bridges</p></li>
                                    </ul>
                                    <li><h6>Europe</h6></li>
                                    <ul>
                                        <li><p>Card Bridges</p></li>
                                    </ul>
                                    <li><h6>Africa</h6></li>
                                    <ul>
                                        <li><p>Card Bridges</p></li>
                                    </ul>
                                    <li><h6>North America</h6></li>
                                    <ul>
                                        <li><p>Card Bridges</p></li>
                                    </ul>
                                    <li><h6>South America</h6></li>
                                    <ul>
                                        <li><p>Card Bridges</p></li>
                                    </ul>
                                    <li><h6>Oceania</h6></li>
                                    <ul>
                                        <li><p>Card Bridges</p></li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <h2 style={{ color: '#dc3545' }}>Category</h2>
                        <ul>
                            <li><h6>Historical Great Bridges</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                            <li><h6>Iconic Bridges</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                            <li><h6>Modern Great Bridges</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                            <li><h6>High-Level Achievement Bridges</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <h2 style={{ color: '#dc3545' }}>Continent Filter</h2>
                        <ul>
                            <li><h6>Asia</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                            <li><h6>Europe</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                            <li><h6>Africa</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                            <li><h6>North America</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                            <li><h6>South America</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                            <li><h6>Oceania</h6></li>
                            <ul>
                                <li><p>Card Bridges</p></li>
                            </ul>
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <h2 style={{ color: '#dc3545' }}>List of Bridges</h2>
                        <ul>
                            <li><h6>List Table</h6></li>
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <h2 style={{ color: '#dc3545' }}>Contact US</h2>
                        <ul>
                            <li><h6>Modal Contact</h6></li>
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <h2 style={{ color: '#dc3545' }}>About Us</h2>
                        <ul>
                            <li><h6>Content About Us</h6></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SiteMap;