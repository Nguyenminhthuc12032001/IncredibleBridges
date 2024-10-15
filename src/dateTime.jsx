import { useEffect, useState } from 'react';
import { AccessTime, CalendarToday, LocationOn } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';

function DateTime() {

    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [userLocation, setUserLocation] = useState('Not determined');
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        // Get current date and time
        const updateDateTime = () => {
            const date = new Date();
            setCurrentDate(date.toLocaleDateString());
            setCurrentTime(date.toLocaleTimeString());
        };
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);

        // Get user's location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation(`Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`);
            });
        }

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Kiểm tra và cập nhật số lượt truy cập sau khi component render
        if (localStorage.getItem('visitCount')) {
            let count = parseInt(localStorage.getItem('visitCount'));
            count++;
            localStorage.setItem('visitCount', count);
            setVisitCount(count);  // Cập nhật state
        } else {
            localStorage.setItem('visitCount', 1);
            setVisitCount(1);  // Cập nhật state
        }
    }, []);

    return (

        <div className="dateTime">
            <p className='row'>
                <div className='col-md-3'><CalendarToday style={{ verticalAlign: 'middle' }} /> Date: {currentDate}</div>
                <div className='col-md-3'><AccessTime style={{ verticalAlign: 'middle' }} /> Time: {currentTime}</div>
                <div className='col-md-3'><LocationOn style={{ verticalAlign: 'middle' }} /> Location: {userLocation}</div>

                <div className="col-md-3" id="counter">
                    <VisibilityIcon />
                    {visitCount}
                </div>
            </p>
        </div>
    );
}

export default DateTime;