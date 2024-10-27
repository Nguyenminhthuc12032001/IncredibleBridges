import data from './data.json';  // Import bridge data from a JSON file
import { useLocation } from 'react-router-dom';  // Hook to get current route location
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridge } from '@fortawesome/free-solid-svg-icons';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PublicIcon from '@mui/icons-material/Public';


function Homepage({ showDescription, handleOpen }) {

    const location = useLocation();
    const Bridges = location.state?.Bridges || localStorage.getItem('Bridges');  
    // Use `Bridges` from location.state if available; otherwise, retrieve it from localStorage for persistence on page refresh
    
    const [list, setList] = useState(data);  // State to store filtered list of bridges
    const [selectedContinent, setSelectedContinent] = useState("International Bridges");  // State to store selected continent

    // Function to filter bridges by continent
    const handleFilterChange = (continent) => {
        setSelectedContinent(continent);
        setList(continent === "International Bridges" ? data : data.filter(item => item.continent === continent));
    };

    // Automatically filter bridges based on selected state or default to "World"
    useEffect(() => {
        handleFilterChange(Bridges || "International Bridges");
    }, [Bridges]);

    // Find the bridge with the highest height
    const highest = list.length > 0
        ? list.reduce((a, b) => (a.height > b.height) ? a : b)
        : null;

    // Find the bridge with the longest length
    const longest = list.length > 0
        ? list.reduce((a, b) => (a.length > b.length) ? a : b)
        : null;

    // Find the bridge with the tallest height
    const tallest = list.length > 0
        ? list.reduce((a, b) => (a.tall > b.tall) ? a : b)
        : null;

    // Find the oldest bridge
    const oldest = list.length > 0
        ? list.reduce((a, b) => (a.yearCompleted < b.yearCompleted) ? a : b)
        : null;

    // Array of selected bridges based on specific records
    const selectedBridges = [
        { ...highest, record: 'Highest' },
        { ...longest, record: 'Longest' },
        { ...tallest, record: 'Tallest' },
        { ...oldest, record: 'Oldest' }
    ];

    const images = data[0].imgHome.img;  // Images for the carousel

    return (
        <div className="con">

            {/* Main carousel section */}
            <div className="con-img-main">
                <div className='con-title'>
                    <h1 className="title">Icons of Human Ingenuity, Connecting Worlds Beyond Boundaries.</h1>
                    <p style={{ fontSize: '1.2em' }}>"Bridges symbolize human innovation and ambition, connecting worlds and uniting people across continents and cultures. From the Brooklyn Bridge's enduring grace to the Millau Viaduct's soaring heights, each bridge tells a story of vision and unity. Explore iconic bridges that shape landscapes and stand as symbols of hope, progress, and human connection."</p>
                </div>

                {/* Bootstrap Carousel */}
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ width: "100%" }}>
                    {/* Carousel Indicators */}
                    <div className="carousel-indicators">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                            ></button>
                        ))}
                    </div>

                    {/* Carousel Slides */}
                    <div className="carousel-inner" style={{ width: "100%" }}>
                        {images.map((imgUrl, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                            >
                                <img
                                    src={imgUrl}
                                    alt={`Bridge ${index + 1}`}
                                    className="d-block img-Carousel"
                                    style={{ width: "100%" }}
                                    loading="lazy"
                                    onClick={() => handleOpen(imgUrl)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>

            {/* Filter dropdown and bridge display */}
            <div id="mostFamous">
                <div className="nav-item dropdown">
                    <h2 style={{ fontSize: '2em', fontWeight: 'bold', padding: '10px', backgroundColor: '#212529', color: 'white' }} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"><EngineeringIcon /> Outstanding Bridges</h2>
                    <ul className="dropdown-menu filter">
                        <button className="dropdown-item" onClick={() => handleFilterChange('International Bridges')}>International Bridges</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('Asia')}>Asia</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('Europe')}>Europe</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('Africa')}>Africa</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('North America')}>North America</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('South America')}>South America</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('Oceania')}>Oceania</button>
                    </ul>
                </div>

                {/* Display filtered list of bridges */}
                <div className="row">
                    <h3 style={{ margin: '0', paddingTop: '10px' }}><PublicIcon /> {selectedContinent}</h3>
                    {list.length === 0 ? (
                        <p>No bridges found for the selected continent.</p>
                    ) : (
                        selectedBridges.map((item) => (
                            <div className="card col-md-4 col-lg-3 col-xl-3 col-xll-2">

                                <button style={{ fontWeight: 'bolder' }} className="titile-card" onClick={() => showDescription(item)}>
                                    <FontAwesomeIcon icon={faBridge} /> {item.name}<br /> ({item.record}) <ArrowRightAltIcon className="arrow-icon" fontSize="large" />
                                </button>

                                {/* Clickable image to open modal */}
                                <img className="card-img-bottom" src={item.imgCard} loading="lazy" onClick={() => handleOpen(item.imgCard)} />

                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
}

export default Homepage;



