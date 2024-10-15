import { useNavigate } from 'react-router-dom';
import data from './data.json';
import { useState } from 'react';

function BridgeList( ) {

    const [list, setList] = useState(data);
    const [search, setSearch] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
    const navigate = useNavigate();

    const handleDetailClick = (item) => {
        // Lưu thông tin cầu vào localStorage
        localStorage.setItem('bridgeData', JSON.stringify(item));
        
        navigate(`/detail`);
    };

    const handleSearchClick = () => {
        if (!search) {
            setList(data);
            return;
        }
        // Lọc danh sách tìm kiếm dựa trên name
        const result = data.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setList(result); // Cập nhật list để hiện thị đối tượng tìm kiếm
    };

    const handleSortChange = (ev) => {
        const value = ev.target.value;

        let sortedList = [];

        // Thay đổi hướng sắp xếp
        const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
        setSortDirection(newSortDirection);

        switch (value) {
            case "ID":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc" ? a.id - b.id : b.id - a.id
                );
                break;
            case "NAME":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
                );
                break;
            case "LOCATION":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc" ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location)
                );
                break;
            case "CONTINENT":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc" ? a.continent.localeCompare(b.continent) : b.continent.localeCompare(a.continent)
                );
                break;
            case "TYPE":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc" ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type)
                );
                break;
            case "LENGTH":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc" ? parseFloat(a.length) - parseFloat(b.length) : parseFloat(b.length) - parseFloat(a.length)
                );
                break;
            case "HEIGHT":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc" ? parseFloat(a.height) - parseFloat(b.height) : parseFloat(b.height) - parseFloat(a.height)
                );
                break;
            default:
                sortedList = list;
        }
        setList(sortedList); // Cập nhật danh sách đã sắp xếp
    };

    return (
        <div className='con-list'>
            <h2>Bridges List</h2>
            <hr />
            
            <div class="input-group mb-3 mt-3">
                <button className="btn btn-outline-dark" type="button" onClick={handleSearchClick}>Search</button>
                <input
                    type="text"
                    value={search}
                    onChange={(ev) => setSearch(ev.target.value)}
                    className="form-control" placeholder="Search by name..."
                />
            </div>

            <table className="table table-striped table-hover listUSB">
                <thead className="table table-striped table-hover">
                    <tr>
                        <td><button value="ID" onClick={handleSortChange}>ID</button></td>
                        <td><button value="NAME" onClick={handleSortChange}>NAME</button></td>
                        <td><button value="LOCATION" onClick={handleSortChange}>LOCATION</button></td>
                        <td><button value="CONTINENT" onClick={handleSortChange}>CONTINENT</button></td>
                        <td><button value="TYPE" onClick={handleSortChange}>TYPE</button></td>
                        <td><button value="LENGTH" onClick={handleSortChange}>LENGTH</button></td>
                        <td><button value="HEIGHT" onClick={handleSortChange}>HEIGHT</button></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.location}</td>
                                <td>{item.continent}</td>
                                <td>{item.type}</td>
                                <td>{item.length}</td>
                                <td>{item.height}</td>
                                <td><button className="btn btn-dark" onClick={() => handleDetailClick(item)}>Detail</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BridgeList;
