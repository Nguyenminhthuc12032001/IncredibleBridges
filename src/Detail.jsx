import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlagIcon from '@mui/icons-material/Flag';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EventIcon from '@mui/icons-material/Event';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBridge } from '@fortawesome/free-solid-svg-icons';
import HelpIcon from '@mui/icons-material/Help';

function Detail({ Close, bridgeData, showFAQ }) {
    return (
        <div className="con-modal">
            <div className="form-detail">

                <h2><FontAwesomeIcon icon={faBridge} /> {bridgeData.name}</h2>

                <ul className="list-detail">
                    <li style={{ backgroundColor: '#212529', color: 'white' }}>
                        <h4><DescriptionIcon /> Description:</h4> {bridgeData.description}
                    </li>
                    <li>
                        <h4><HistoryIcon /> History:</h4> {bridgeData.history}
                    </li>
                    <li style={{ backgroundColor: '#212529', color: 'white' }}>
                        <h4><AccountBalanceIcon /> Architecture:</h4> {bridgeData.architecture}
                    </li>
                    <li>
                        <h4><FlagIcon /> Cultural Significance:</h4> {bridgeData.culturalSignificance}
                    </li>
                    <li style={{ backgroundColor: '#212529', color: 'white' }}>
                        <h4><TravelExploreIcon /> Tourism Impact:</h4> {bridgeData.tourismImpact}
                    </li>
                    <li>
                        <h4><MonetizationOnIcon /> Tourism Revenue:</h4> {bridgeData.tourismRevenue}
                    </li>
                    <li style={{ backgroundColor: '#212529', color: 'white' }}>
                        <h4><EventIcon /> Events And Festivals:</h4> {bridgeData.eventsAndFestivals}
                    </li>
                    <li>
                        <h4><NaturePeopleIcon /> Conservation Efforts:</h4> {bridgeData.conservationEfforts}
                    </li>
                </ul>

                <div className="btn-detail">
                    <button type="button" className="btn" onClick={Close}>
                        <CloseIcon />
                    </button>
                </div>

                <div className="btn-FAQ">
                    <button type="button" className="btn" onClick={showFAQ}>
                        <HelpIcon />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Detail;
