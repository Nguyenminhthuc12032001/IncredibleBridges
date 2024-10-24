import React from 'react';
import us from './us.json';  // Data about the team and project from us.json
import VisibilityIcon from '@mui/icons-material/Visibility';  // Vision icon
import CheckCircleIcon from '@mui/icons-material/CheckCircle';  // Mission icon
import DescriptionIcon from '@mui/icons-material/Description';  // Project overview icon
import PeopleIcon from '@mui/icons-material/People';  // Team info icon
import MailOutlineIcon from '@mui/icons-material/MailOutline';  // Contact info icon

// AboutUs component that displays project and team information
function AboutUs() {
    return (
        <div className="con">
            <div className="imgAboutUs">
                <h1 className="title" style={{ backgroundColor: 'rgba(33, 37, 41, 0.5)', padding: '20px', color: 'white' }}>About Us</h1>
            </div>

            <div className='AboutUs-body'>
                {/* Project overview section */}
                <div className='row box-text'>
                    <div className='col-12 col-lg-6 icon'>
                        <DescriptionIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Project Overview</h3>
                        <ul>
                            <li>{us.projectOverview.description}</li>
                        </ul>
                    </div>
                </div>

                {/* Mission section */}
                <div className='row box-text' style={{ backgroundColor: '#212529', color: 'white' }}>
                    <div className='col-12 col-lg-6 icon'>
                        <CheckCircleIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Mission</h3>
                        <ul>
                            <li>{us.projectGoals.mission}</li>
                        </ul>
                    </div>
                </div>

                {/* Vision section */}
                <div className='row box-text'>
                    <div className='col-12 col-lg-6 icon'>
                        <VisibilityIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Vision</h3>
                        <ul>
                            <li>{us.futureVision.vision}</li>
                        </ul>
                    </div>
                </div>

                {/* Team information section */}
                <div className='row box-text' style={{ backgroundColor: '#212529', color: 'white' }}>
                    <div className='col-12 col-lg-6 icon'>
                        <PeopleIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Who we are</h3>
                        <ul>
                            {us.team.members.map((member, index) => (
                                <li key={index}>
                                    <h5 style={{ fontWeight: 'bold' }}>{member.name} - {member.role}</h5>
                                    <p><span>StudentID: </span>{member.studentID}</p>
                                    <p><span>Email: </span>{member.email}</p>
                                    <p>{member.bio}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact information section */}
                <div className='row box-text'>
                    <div className='col-12 col-lg-6 icon'>
                        <MailOutlineIcon style={{ fontSize: '1em' }} />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Contact Information</h3>
                        <ul>
                            <li><b>Email:</b> {us.contactInfo.email}</li>
                            <li><b>Address:</b> {us.contactInfo.address}</li>
                            <li><b>Phone:</b> {us.contactInfo.phone}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
