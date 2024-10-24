import { Link } from "react-router-dom";
import { useEffect } from "react";

function BridgeDescription({ Close, item, handleOpen }) {

    // When the component renders, store the bridge data in localStorage
    useEffect(() => {
        if (item) {
            localStorage.setItem('bridgeData', JSON.stringify(item)); // Save the selected bridge data to localStorage
        }
    }, [item]); // Effect runs whenever 'item' changes

    return (
        <div className="con-modal">
            <div className="row form-description">
                {/* Display the bridge image, with lazy loading and onClick handler to open it in a modal */}
                <div className="col-md-12 col-lg-6 col-xl-6 col-xll-6">
                    <img className="img-description" src={item.imgCard} alt="bridge" loading="lazy" onClick={() => handleOpen(item.imgCard)} />
                </div>

                {/* Display the bridge details and buttons for navigation */}
                <form className="con-bnt-form col-md-12 col-lg-6 col-xl-6 col-xll-6">
                    <h2 className="card-title">{item.name}</h2>
                    <ul className="list-description">
                        <li><b>Location:</b> {item.location}</li>
                        <li><b>Category:</b> {item.category}</li>
                        <li><b>Continent:</b> {item.continent}</li>
                        <li><b>Year Completed:</b> {item.yearCompleted}</li>
                        <li><b>Length:</b> {item.length}m</li>
                        <li><b>Height:</b> {item.height}m</li>
                        <li><b>Type:</b> {item.type}</li>
                        <li><b>Description:</b> {item.description}</li>
                    </ul>

                    {/* Buttons: link to 'Detail' page and close button */}
                    <div className="bnt-form">
                        <Link className="btn btn-dark w-50" to='/detail' onClick={Close}>Detail</Link>
                        <button type="button" className="btn btn-danger w-50" onClick={Close}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BridgeDescription;