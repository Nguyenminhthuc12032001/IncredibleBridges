
import { useLocation } from 'react-router-dom';
import data from './data.json';
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridge } from '@fortawesome/free-solid-svg-icons';

function Overview({ showDescription }) {

    const [list, setList] = useState(data);

    const location = useLocation();
    const { Bridges } = location.state || {}; // Lấy giá trị "Bridges" từ state

    useEffect(() => {
        if (Bridges) {
            // Lọc danh sách cầu từ dữ liệu dựa trên thuộc tính "category" hoặc "continent"
            const filteredList = data.filter(item =>
                item.category === Bridges || item.continent === Bridges
            );
            setList(filteredList); // Cập nhật danh sách cầu đã lọc vào state
        } else {
            setList(data);  // Nếu không có giá trị trong state, hiển thị toàn bộ danh sách
        }
    }, [Bridges]);

    return (
        <div className="con">
            <div id="mostFamous">
                <h2>{Bridges}</h2>
                <div className="row">
                    {
                        list.map((item) => (
                            <div className="card col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xll-2">

                                <button className="titile-card" onClick={() => showDescription(item)}>
                                    <FontAwesomeIcon icon={faBridge} /> {item.name}
                                    </button>

                                <img className="card-img-bottom" src={`${process.env.PUBLIC_URL}/bridge/bridge.jpg`} alt="bridge" />

                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default Overview;