import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import './App.css';
import Overview from './Overview';
import BridgeDetail from './BridgeDetail';
import React, { useState } from 'react';
import BridgeDescription from './BridgeDescription';
import Contact from './Contact';
import AboutUs from './Aboutus';
import Footer from './Footer';
import DateTime from './dateTime';
import { Homefaq } from './FAQ';
import SiteMap from './siteMap';
import BackToTopButton from './backtoTop';
import FeedbackForm from './Feedback';
import ScrollToTop from './ScrollToTop';
import { Modal } from '@mui/material';
import Gallary from './gallery';

function App() {
  // States to manage modal visibility and selected image
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(""); // Stores the URL of the selected image for the modal

  // Open the modal and set the selected image
  const handleOpen = (ev) => {
    setSelectedImage(ev);
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => setOpen(false);

  // Various states to manage the visibility of different sections (contact, feedback, detail, etc.)
  const [description, setDescription] = useState(false);
  const [contact, setContact] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [detail, setDetail] = useState(false);
  const [faq, setFAQ] = useState(false);
  const [homefaq, setHomefaq] = useState(false);
  const [sitemap, setSiteMap] = useState(false);
  const [selectedBridge, setSelectedBridge] = useState(null);

  // Handlers to show/hide different sections
  const showContact = () => {
    setContact(true);
  };
  const showFeedback = () => {
    setFeedback(true);
  };
  const showDetail = () => {
    setDetail(true);
  };
  const showFAQ = () => {
    setFAQ(true);
  };
  const showSiteMap = () => {
    setSiteMap(true);
  };
  const showHomefaq = () => {
    setHomefaq(true);
  };
  const showDescription = (item) => {
    setDescription(true);
    setSelectedBridge(item);
  };

  // Close all modals and reset states
  const Close = () => {
    setDescription(false);
    setContact(false);
    setDetail(false);
    setFAQ(false);
    setHomefaq(false);
    setSiteMap(false);
    setFeedback(false);
  };
  return (
    <div className="App">
      <Header />

      {/* Main routing structure */}
      <Routes>
        {/* Homepage route */}
        <Route path='/' element={<Homepage showDescription={showDescription} handleOpen={handleOpen} />} />

        {/* Overview route */}
        <Route path='/overview' element={<Overview showDescription={showDescription} handleOpen={handleOpen} />} />

        {/* BridgeDetail route */}
        <Route path='/detail' element={<BridgeDetail showDetail={showDetail} showFAQ={showFAQ} detail={detail} faq={faq} Close={Close} handleOpen={handleOpen} />} />

        {/* AboutUs route */}
        <Route path='/aboutus' element={<AboutUs />} />

        {/* Gallery route */}
        <Route path='/gallery' element={<Gallary handleOpen={handleOpen} />} />

        {/* Fallback route (default to homepage) */}
        <Route path="*" element={<Homepage showDescription={showDescription} handleOpen={handleOpen} />} />

      </Routes>

      {/* Conditional rendering for modals and pop-ups */}
      {contact && <Contact Close={Close} />}
      {feedback && <FeedbackForm Close={Close} />}
      {description && <BridgeDescription item={selectedBridge} Close={Close} handleOpen={handleOpen} />}
      {homefaq && <Homefaq Close={Close} />}
      {sitemap && <SiteMap Close={Close} />}

      {/* Other components like footer, scroll to top button, date/time */}
      <BackToTopButton />
      <ScrollToTop />
      <Footer showHomefaq={showHomefaq} showSiteMap={showSiteMap} showFeedback={showFeedback} showContact={showContact} />
      <DateTime />

      {/* Modal for displaying large image when clicked */}
      <Modal open={open} onClick={handleClose}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          zIndex: '9999'
        }}>
          <img src={selectedImage} alt="Bridge Large" style={{ maxHeight: '90vh', maxWidth: '90vw' }} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
