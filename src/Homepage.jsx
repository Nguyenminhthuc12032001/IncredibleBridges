
import data from './data.json';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridge } from '@fortawesome/free-solid-svg-icons';

function Homepage({ showDescription }) {

    const [list, setList] = useState(data);


    const handleFilterChange = (continent) => {
        setList(data.filter(item => item.continent === continent)); // Lọc danh sách cầu dựa trên châu lục
    };



    // Tìm cầu cao nhất (cung cấp giá trị khởi tạo rỗng)
    const highest = list.reduce((a, b) => (a.height > b.height) ? a : b, {});

    // Tìm cầu dài nhất (cung cấp giá trị khởi tạo rỗng)
    const longest = list.reduce((a, b) => (a.length > b.length) ? a : b, {});

    // Tìm cầu có cột cao nhất (cung cấp giá trị khởi tạo rỗng)
    const tallest = list.reduce((a, b) => (a.tall > b.tall) ? a : b, {});

    // Tìm cầu cổ nhất (cung cấp giá trị khởi tạo rỗng)
    const oldest = list.reduce((a, b) => (a.yearCompleted < b.yearCompleted) ? a : b, {});


    // Mảng chứa 4 cây cầu tính toán được
    const selectedBridges = [
        { ...highest, record: 'Highest' },
        { ...longest, record: 'Longest' },
        { ...tallest, record: 'Tallest' },
        { ...oldest, record: 'Oldest' }
    ];

    return (
        <div className="con">

            <div className="con-img-main">
                <div>
                    <h1 className="title">Icons of Human Ingenuity, Connecting Worlds Beyond Boundaries</h1>
                    <p>"Bridges symbolize human innovation and ambition, connecting worlds and uniting people across continents and cultures. From the Brooklyn Bridge's enduring grace to the Millau Viaduct's soaring heights, each bridge tells a story of vision and unity. Explore iconic bridges that shape landscapes and stand as symbols of hope, progress, and human connection."</p>
                </div>
            </div>

            <div id="mostFamous">
                <div className="nav-item dropdown">
                    <h2 style={{ fontSize: '2em', fontWeight: 'bold', padding: '10px' }} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Outstanding Bridges</h2>

                    <ul className="dropdown-menu filter">
                        <button className="dropdown-item" onClick={() => setList(data)}>All</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('Asia')}>Asia</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('Europe')}>Europe</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('Africa')}>Africa</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('North America')}>North America</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('South America')}>South America</button>
                        <button className="dropdown-item" onClick={() => handleFilterChange('Oceania')}>Oceania</button>
                    </ul>

                </div>
                <div className="row">
                    {list.length === 0 ? (
                        <p>No bridges found for the selected continent.</p>
                    ) : (
                        selectedBridges.map((item) => (
                            <div className="card col-md-4 col-lg-3 col-xl-3 col-xll-2">

                                <button className="titile-card" onClick={() => showDescription(item)}>
                                    <FontAwesomeIcon icon={faBridge} /> {item.name} <br /> ({item.record})
                                </button>

                                <img className="card-img-bottom" src={`${process.env.PUBLIC_URL}/bridge/bridge.jpg`} />

                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
}

export default Homepage;