import React from 'react';
import Usdata from './Usdata.json';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function AboutUs() {
    return (
        <div className="con">
            <div className="imgAboutUs">
                <h1 className="title">About Us</h1>
            </div>

            <div className='AboutUs-body'>
                <div className='row box-text'>
                    <div className='col-12 col-lg-6 icon'>
                        <DescriptionIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Project Overview</h3>
                        <ul>
                        <li>{Usdata.projectOverview.description}</li>
                        </ul>
                    </div>
                </div>

                <div className='row box-text' style={{ backgroundColor: '#212529', color: 'white' }}>
                    <div className='col-12 col-lg-6 icon'>
                        <CheckCircleIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Mission</h3>
                        <ul>
                        <li>{Usdata.projectGoals.mission}</li>
                        </ul>
                    </div>
                </div>

                <div className='row box-text'>
                    <div className='col-12 col-lg-6 icon'>
                        <VisibilityIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Vision</h3>
                        <ul>
                        <li>{Usdata.futureVision.vision}</li>
                        </ul>
                    </div>
                </div>

                <div className='row box-text' style={{ backgroundColor: '#212529', color: 'white' }}>
                    <div className='col-12 col-lg-6 icon'>
                        <PeopleIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Who we are</h3>
                        <ul>
                            {Usdata.team.members.map((member, index) => (
                                <li key={index}>
                                    <h5 style={{ fontWeight: 'bold' }}>{member.name} - {member.role}</h5>
                                    <p>{member.bio}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='row box-text'>
                    <div className='col-12 col-lg-6 icon'>
                        <MailOutlineIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Contact Information</h3>
                        <ul>
                        <li><b>Email:</b> {Usdata.contactInfo.email}</li>
                        <li><b>Address:</b> {Usdata.contactInfo.address}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
