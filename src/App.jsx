import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import './App.css';
import Overview from './Overview';
import BridgeDetail from './BridgeDetail';
import React, { useState } from 'react';
import BridgeList from './BridgeList';
import BridgeDescription from './BridgeDescription';
import Contact from './Contact';
import AboutUs from './Aboutus';
import Footer from './Footer';
import DateTime from './dateTime';
import { Homefaq } from './FAQ';
import SiteMap from './siteMap';

function App() {
  const [description, setDescription] = useState(false);
  const [contact, setContact] = useState(false);
  const [detail, setDetail] = useState(false);
  const [faq, setFAQ] = useState(false);
  const [homefaq, setHomefaq] = useState(false);
  const [sitemap, setSiteMap] = useState(false);
  const [selectedBridge, setSelectedBridge] = useState(null);

  const showContact = () => {
    setContact(true);
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
  const Close = () => {
    setDescription(false);
    setContact(false);
    setDetail(false);
    setFAQ(false);
    setHomefaq(false);
    setSiteMap(false);
  };
  return (
    <div className="App">
      <Header showContact={showContact} />
      <Routes>

        <Route path='/' element={<Homepage showDescription={showDescription} />} />
        <Route path='/overview' element={<Overview description={description} showDescription={showDescription} Close={Close} />} />
        <Route path='/detail' element={<BridgeDetail showDetail={showDetail} showFAQ={showFAQ} detail={detail} faq={faq} Close={Close} />} />
        <Route path='/bridgelist' element={<BridgeList />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>


      {contact && <Contact Close={Close} />}
      {description && <BridgeDescription item={selectedBridge} Close={Close} />}
      {homefaq && <Homefaq Close={Close} />}
      {sitemap && <SiteMap Close={Close} />}


      <Footer showHomefaq={showHomefaq} showSiteMap={showSiteMap} />
      <DateTime />
    </div>
  );
}

export default App;
