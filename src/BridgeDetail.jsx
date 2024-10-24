import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import { FAQ } from "./FAQ";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StraightenIcon from '@mui/icons-material/Straighten';
import HeightIcon from '@mui/icons-material/Height';
import TerrainIcon from '@mui/icons-material/Terrain';
import CategoryIcon from '@mui/icons-material/Category';
import PublicIcon from '@mui/icons-material/Public';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function BridgeDetail({ faq, detail, showDetail, showFAQ, Close, handleOpen }) {
    const [bridgeData, setBridgeData] = useState(null);

    // Load bridge data from localStorage when the component mounts
    useEffect(() => {
        const savedBridgeData = localStorage.getItem('bridgeData');
        if (savedBridgeData) {
            setBridgeData(JSON.parse(savedBridgeData)); // Parse and set the bridge data
        }
    }, []);  // Empty dependency array means this runs only on component mount

    // If bridge data is not available, display loading
    if (!bridgeData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="con">
            {/* Display the bridge's main image and summary */}
            <div className="imgDetail" style={{ backgroundImage: `url(${bridgeData.imgMain})` }}>
                <button onClick={showDetail}>
                    <h1>{bridgeData.name}<br />({bridgeData.continent} <PublicIcon />)<ArrowRightAltIcon className="arrow-icon" fontSize="large" /></h1>
                    <p style={{ fontSize: '1.2em' }}>"{bridgeData.summary}"</p>
                </button>
            </div>

            <div id="mostFamous">
                {/* Bridge details like location, year, length, height, etc. */}
                <div className="row">
                    <h6 className="col-6 col-md-4 col-lg-2 col-xl-2">
                        <LocationOnIcon /> Location: <span>{bridgeData.location}</span>
                    </h6>
                    <h6 className="col-6 col-md-4 col-lg-2 col-xl-2">
                        <CalendarTodayIcon /> Est: <span>{bridgeData.yearCompleted}</span>
                    </h6>
                    <h6 className="col-6 col-md-4 col-lg-2 col-xl-2">
                        <StraightenIcon /> Length: <span>{bridgeData.length}</span>m
                    </h6>
                    <h6 className="col-6 col-md-4 col-lg-2 col-xl-2">
                        <HeightIcon /> Height: <span>{bridgeData.height}</span>m
                    </h6>
                    <h6 className="col-6 col-md-4 col-lg-2 col-xl-2">
                        <TerrainIcon /> Tall: <span>{bridgeData.tall}</span>m
                    </h6>
                    <h6 className="col-6 col-md-4 col-lg-2 col-xl-2">
                        <CategoryIcon /> Type: <span>{bridgeData.type}</span>
                    </h6>
                </div>

                <div className="row">
                    {/* Display Google Map iframe */}
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xll-4">
                        <iframe
                            src={bridgeData.map}
                            className="img-Carousel"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    {/* Image carousel with slideshow functionality */}
                    <div id="demo" className="col-12 col-md-4 col-lg-4 col-xl-4 col-xll-4 carousel slide" data-bs-ride="carousel">
                        {/* Indicators/dots */}
                        <div className="carousel-indicators">
                            {bridgeData.img.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#demo"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                ></button>
                            ))}
                        </div>

                        {/* The slideshow/carousel */}
                        <div className="carousel-inner">
                            {bridgeData.img.map((imgUrl, index) => (
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

                        {/* Carousel controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

                    {/* Video iframe */}
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xll-4">
                        <iframe
                            className="img-Carousel"
                            src={bridgeData.video}
                            title="video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>

                </div>
            </div>

            {/* Display additional detail and FAQ sections */}
            {detail && <Detail Close={Close} bridgeData={bridgeData} showFAQ={showFAQ} />}
            {faq && <FAQ Close={Close} bridgeData={bridgeData} />}

        </div>
    );
}

export default BridgeDetail;