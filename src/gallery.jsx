import data from './data.json'; // Importing gallery data from a JSON file
import ImageIcon from '@mui/icons-material/Image'; // Icon used for the gallery title and card titles

function Gallary({ handleOpen }) {
    return (
        <div className="con-gallery">
            <div className="row" style={{ backgroundColor: '#212529' }}>
                {/* Gallery title with image icon */}
                <h1 className='title-gallery'><ImageIcon style={{ fontSize: '2em' }} /></h1>
                {
                    // Mapping through data to create cards for each item
                    data.map((item) => (
                        item.name &&
                        (
                            <div className="card col-sm-6 col-lg-4 col-xl-3 col-xll-2">

                                <h6 className="titile-card" style={{ color: '#212529', fontSize: 'larger', fontWeight: 'bold', backgroundColor: 'white' }}><ImageIcon /> {item.name}</h6>

                                {/* Card image with lazy loading, clicking opens modal */}
                                <img className="card-img-bottom" src={item.imgCard} alt="bridge" loading="lazy" onClick={() => handleOpen(item.imgCard)} />

                            </div>
                        ))
                    )}

            </div>
        </div>
    );
}

export default Gallary;