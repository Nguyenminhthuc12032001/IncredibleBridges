import { useEffect, useState } from 'react';
import { AccessTime, CalendarToday, LocationOn } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';


function DateTime() {

    const [visitCount, setVisitCount] = useState(0);  // State to store visit count
    const [currentDate, setCurrentDate] = useState('');  // State to store current date
    const [currentTime, setCurrentTime] = useState('');  // State to store current time
    const [userLocation, setUserLocation] = useState('Not determined');  // State to store user location

    useEffect(() => {
        // Function to update date and time every second
        const updateDateTime = () => {
            const date = new Date();
            setCurrentDate(date.toLocaleDateString());
            setCurrentTime(date.toLocaleTimeString());
        };
        updateDateTime();  // Initialize on first render
        const intervalId = setInterval(updateDateTime, 1000);  // Update every second

        // Get user's geographical location using browser's Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude.toFixed(3);
                const longitude = position.coords.longitude.toFixed(3);
                const latDirection = latitude >= 0 ? 'N' : 'S';
                const lonDirection = longitude >= 0 ? 'E' : 'W';
                setUserLocation(`${Math.abs(latitude)}° ${latDirection}, ${Math.abs(longitude)}° ${lonDirection}`);
            });
        }

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Update and store visit count in localStorage
        if (localStorage.getItem('visitCount')) {
            let count = parseInt(localStorage.getItem('visitCount'));
            count++;
            localStorage.setItem('visitCount', count);
            setVisitCount(count);
        } else {
            localStorage.setItem('visitCount', 1);
            setVisitCount(1);
        }
    }, []);


    return (

        <div className="dateTime">
            <div className="row" style={{ fontSize: '0.7em' }}>
                {/* Display current date */}
                <div className="col-3">
                    <CalendarToday style={{ fontSize: '1.2em' }} /> {currentDate}
                </div>

                {/* Display current time */}
                <div className="col-3">
                    <AccessTime style={{ fontSize: '1.2em' }} /> {currentTime}
                </div>

                {/* Display user location */}
                <div className="col-3">
                    <LocationOn style={{ fontSize: '1.2em' }} /> {userLocation}
                </div>

                {/* Display visit count */}
                <div className="col-3" id="counter">
                    <VisibilityIcon style={{ fontSize: '1.2em' }} /> {visitCount}
                </div>
            </div>
        </div>

    );
}

export default DateTime;