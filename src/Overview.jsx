import { useLocation } from 'react-router-dom';  // Hook to get the current route location
import data from './data.json';  // Import bridge data from a JSON file
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridge } from '@fortawesome/free-solid-svg-icons';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LanguageIcon from '@mui/icons-material/Language';

function Overview({ showDescription, handleOpen }) {

    const location = useLocation();
    const Bridges = location.state?.Bridges || localStorage.getItem('Bridges');  
// Use `Bridges` from location.state if available; otherwise, retrieve it from localStorage for persistence on page refresh

    const [list, setList] = useState([]);  // State for the current list of bridges
    const [filteredList, setFilteredList] = useState([]);  // State for the filtered list of bridges

    const [search, setSearch] = useState("");  // State for search input
    const [sortDirection, setSortDirection] = useState("asc");  // State for sort direction (ascending/descending)
    const [sortBy, setSortBy] = useState("");  // State for sorting criteria (e.g., name, height)

    // Effect to load and filter data based on bridge category/continent from state
    useEffect(() => {
        if (Bridges) {
            if (Bridges === "International Bridges") {
                setFilteredList(data);  // Show all bridges for "International Bridges"
                setList(data);
            } else {
                const filteredData = data.filter(item => item.category === Bridges || item.continent === Bridges);
                setFilteredList(filteredData);  // Filter bridges by category or continent
                setList(filteredData);
            }
        } else {
            setFilteredList(data);  // Default to showing all bridges
            setList(data);
        }
        setSortBy("");  // Reset sorting on new data load
    }, [Bridges]);

    // Function to handle sorting by different criteria
    const handleSortChange = (ev) => {
        const value = ev.target.value;
        let sortedList = [];

        const newSortDirection = sortDirection === "asc" ? "desc" : "asc"; // Toggle sort direction
        setSortDirection(newSortDirection);
        setSortBy(value);  // Set sorting criteria

        // Sort the list based on selected criteria (ID, name, location, etc.)
        switch (value) {
            case "ID":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc" ? a.id - b.id : b.id - a.id
                );
                break;
            case "NAME":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc"
                        ? (a.name || "").localeCompare(b.name || "")
                        : (b.name || "").localeCompare(a.name || "")
                );
                break;
            case "LOCATION":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc"
                        ? (a.location || "").localeCompare(b.location || "")
                        : (b.location || "").localeCompare(a.location || "")
                );
                break;
            case "CONTINENT":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc"
                        ? (a.continent || "").localeCompare(b.continent || "")
                        : (b.continent || "").localeCompare(a.continent || "")
                );
                break;
            case "TYPE":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc"
                        ? (a.type || "").localeCompare(b.type || "")
                        : (b.type || "").localeCompare(a.type || "")
                );
                break;
            case "LENGTH":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc"
                        ? parseFloat(a.length) - parseFloat(b.length)
                        : parseFloat(b.length) - parseFloat(a.length)
                );
                break;
            case "HEIGHT":
                sortedList = [...list].sort((a, b) =>
                    newSortDirection === "asc"
                        ? parseFloat(a.height) - parseFloat(b.height)
                        : parseFloat(b.height) - parseFloat(a.height)
                );
                break;
            default:
                sortedList = list;  // If no valid sort criterion, return the list as is
        }
        setList(sortedList);  // Update sorted list
    };

    // Function to handle search by bridge name
    const handleSearchClick = () => {
        if (!search.trim()) {
            setList(filteredList);  // If no search input, show the filtered list
            return;
        }

        const normalizedSearch = search.trim().toLowerCase();  // Normalize search input
        const result = filteredList.filter(item =>
            item.name && item.name.toLowerCase().includes(normalizedSearch)  // Filter based on name
        );
        setList(result);  // Update list with search results
    };

    return (
        <div className="con">
            <div id="mostFamous">

                {/* Title displaying the selected bridge category or continent */}
                <h2 style={{ backgroundColor: '#212529', color: 'white' }}>
                    <LanguageIcon style={{ fontSize: '1em' }} /> {Bridges} <FontAwesomeIcon icon={faBridge} />
                </h2>

                {/* Search input */}
                <div className="input-group mb-3 mt-3">
                    <button className="btn btn-outline-dark" type="button" onClick={handleSearchClick}>Search</button>
                    <input
                        type="text"
                        value={search}
                        onChange={(ev) => setSearch(ev.target.value)}
                        className="form-control" placeholder="Search by name..."
                    />
                </div>

                {/* Dropdown for sorting criteria */}
                <div className="dropdown">
                    <label style={{ fontSize: '1.5em', fontWeight: 'bold' }} className="dropdown-toggle" role="button" data-bs-toggle="dropdown">Sort by:</label>
                    <div className="dropdown-menu filter">
                        <button className="dropdown-item" value="ID" onClick={handleSortChange}>ID</button>
                        <button className="dropdown-item" value="NAME" onClick={handleSortChange}>NAME</button>
                        <button className="dropdown-item" value="LOCATION" onClick={handleSortChange}>LOCATION</button>
                        <button className="dropdown-item" value="CONTINENT" onClick={handleSortChange}>CONTINENT</button>
                        <button className="dropdown-item" value="TYPE" onClick={handleSortChange}>TYPE</button>
                        <button className="dropdown-item" value="LENGTH" onClick={handleSortChange}>LENGTH</button>
                        <button className="dropdown-item" value="HEIGHT" onClick={handleSortChange}>HEIGHT</button>
                    </div>
                </div>

                {/* Display the list of bridges */}
                <div className="row">
                    {
                        list.map((item) => (

                            item.name &&
                            (
                                <div className="card col-sm-6 col-lg-4 col-xl-3 col-xll-2">
                                    {/* Card displaying bridge details */}
                                    <button className="titile-card" onClick={() => showDescription(item)}>
                                        <span style={{ color: 'white', fontSize: 'larger', fontWeight: 'bold' }}><FontAwesomeIcon icon={faBridge} /> {item.name}</span><ArrowRightAltIcon className="arrow-icon" fontSize="large" />
                                        <br />
                                        {sortBy && (
                                            <span style={{ fontSize: '0.8em', fontWeight: 'bolder' }}> ({sortBy}: {item[sortBy.toLowerCase()]})</span>
                                        )}
                                    </button>

                                    {/* Clickable image to open in modal */}
                                    <img className="card-img-bottom" src={item.imgCard} alt="bridge" loading="lazy" onClick={() => handleOpen(item.imgCard)} />

                                </div>
                            ))
                        )}

                </div>
            </div>
        </div>
    );
}

export default Overview;
