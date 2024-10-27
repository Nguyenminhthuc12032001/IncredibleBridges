import data from './data.json'; // Importing gallery data from a JSON file
import ImageIcon from '@mui/icons-material/Image'; // Icon used for images
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; // Icon used for videos
import { useLocation } from 'react-router-dom';  // Hook to get the current route location

function Gallary({ handleOpen }) {
    const location = useLocation();
    const Gallery = location.state?.Gallery || localStorage.getItem('Gallery');  
// Use `Gallery` from location.state if available; fallback to localStorage to retain data after refresh

    return (
        <div className="con-gallery">
            <div className="row" style={{ backgroundColor: '#212529' }}>
                {/* Gallery title with corresponding icon */}
                <h1 className='title-gallery'>
                    {Gallery === 'Image' ? (
                        <ImageIcon style={{ fontSize: '2em' }} />
                    ) : Gallery === 'Video' ? (
                        <VideoLibraryIcon style={{ fontSize: '2em' }} />
                    ) : (
                        <p>No gallery selected</p>
                    )}
                </h1>

                {
                    // If Gallery is 'Image', show images; if it's 'Video', show videos
                    Gallery === 'Image' ? (
                        data.map((item) => (
                            item.imgCard && (
                                <div className="card col-sm-6 col-lg-4 col-xl-3 col-xll-2">
                                    <h6 className="titile-card" style={{ color: '#212529', fontSize: 'larger', fontWeight: 'bold', backgroundColor: 'white' }}>
                                        <ImageIcon /> {item.name}
                                    </h6>
                                    {/* Card image with lazy loading, clicking opens modal */}
                                    <img className="card-img-bottom" src={item.imgCard} alt="bridge" loading="lazy" onClick={() => handleOpen(item.imgCard)} />
                                </div>
                            )
                        ))
                    ) : Gallery === 'Video' ? (
                        data.map((item) => (
                            item.video && (
                                <div className="card col-sm-6 col-lg-4 col-xl-3 col-xll-2">
                                    <h6 className="titile-card" style={{ color: '#212529', fontSize: 'larger', fontWeight: 'bold', backgroundColor: 'white' }}>
                                        <VideoLibraryIcon /> {item.name}
                                    </h6>
                                    {/* Card video with iframe */}
                                    <iframe
                                        className="img-Carousel card-img-bottom"
                                        src={item.video}
                                        title="video"
                                        loading="lazy"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            )
                        ))
                    ) : (
                        <p>No gallery selected.</p> // Default message if no gallery type is selected
                    )
                }
            </div>
        </div>
    );
}

export default Gallary;
