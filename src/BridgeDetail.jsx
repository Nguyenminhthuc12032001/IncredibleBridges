import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import { FAQ } from "./FAQ";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StraightenIcon from '@mui/icons-material/Straighten';
import HeightIcon from '@mui/icons-material/Height';
import TerrainIcon from '@mui/icons-material/Terrain';
import CategoryIcon from '@mui/icons-material/Category';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PublicIcon from '@mui/icons-material/Public';





function BridgeDetail({ faq, detail, showDetail, showFAQ, Close }) {
    const [bridgeData, setBridgeData] = useState(null);

    // Khi component render, lấy dữ liệu từ localStorage
    useEffect(() => {
        const savedBridgeData = localStorage.getItem('bridgeData');
        if (savedBridgeData) {
            setBridgeData(JSON.parse(savedBridgeData));
        }
    }, []);

    if (!bridgeData) {
        return <p>Loading...</p>;
    }

    return (
        <div className="con">
            <div className="imgDetail">
                <h1 className="title">{bridgeData.name}<br />({bridgeData.continent} <PublicIcon style={{ fontSize: '1em', filter: 'drop-shadow(5px 5px 10px #212529)' }} />)</h1>

                <button className="btn" onClick={showDetail}>Detail</button>
            </div>


            <div className="summary">
                <p>
                    <h2><SummarizeIcon style={{ fontSize: '1em' }} /> Summary:</h2> <h4>{bridgeData.summary}</h4>
                </p>
            </div>

            <div id="mostFamous" style={{ backgroundColor: '#212529', color: 'white' }}>
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
                    <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xll-4">
                        <iframe
                            src={bridgeData.map}
                            className="img-Carousel"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>

                    </div>
                    <div id="demo" className="col-12 col-md-4 col-lg-4 col-xl-4 col-xll-4 carousel slide" data-bs-ride="carousel">
                        {/* Indicators/dots */}
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>

                        {/* The slideshow/carousel */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={`${process.env.PUBLIC_URL}/bridge/bridge.jpg`} alt={bridgeData.name} className="d-block img-Carousel" style={{ width: '100%' }} />
                            </div>
                            <div className="carousel-item">
                                <img src={`${process.env.PUBLIC_URL}/bridge/bridge.jpg`} alt={bridgeData.name} className="d-block img-Carousel" style={{ width: '100%' }} />
                            </div>
                            <div className="carousel-item">
                                <img src={`${process.env.PUBLIC_URL}/bridge/bridge.jpg`} alt={bridgeData.name} className="d-block img-Carousel" style={{ width: '100%' }} />
                            </div>
                        </div>

                        {/* Left and right controls/icons */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>

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
            {detail && <Detail Close={Close} bridgeData={bridgeData} showFAQ={showFAQ} />}
            {faq && <FAQ Close={Close} bridgeData={bridgeData} />}

        </div>
    );
}

export default BridgeDetail;