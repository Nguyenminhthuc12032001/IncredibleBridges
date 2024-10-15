import { Link } from "react-router-dom";
import { useEffect } from "react";

function BridgeDescription({ Close, item }) {

    // Khi component render, lưu dữ liệu vào localStorage
    useEffect(() => {
        if (item) {
            localStorage.setItem('bridgeData', JSON.stringify(item));
        }
    }, [item]);

    return (
        <div className="con-modal">
            <div className="row form-description">
                <div className="col-md-12 col-lg-6 col-xl-6 col-xll-6">
                    <img className="img-description" src={`${process.env.PUBLIC_URL}/bridge/bridge.jpg`} alt="bridge" />
                </div>
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