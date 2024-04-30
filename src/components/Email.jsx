import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi'; // Assuming you're using the HiOutlineMail icon from react-icons
import Button from './Button'; // Assuming you have a Button component

const Email = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('Info@metapaygroup.co.uk');
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const handleWriteUs = () => {
    window.location.href = `mailto:Info@metapaygroup.co.uk`;
  };

  return (
    <div className="email-container" style={{ height: '50vh', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', color: '#333' }}>
      <h1 className="email-heading">Contact Us</h1>
      <div className="email-content" style={{ marginTop: '20px' }}>
        <div className="email-address" style={{ display: 'flex', alignItems: 'center' }}>
          <p className="email-label" style={{ marginRight: '10px' }}>Our Email:</p>
          <div className="email-icon" onClick={handleCopyEmail} style={{ cursor: 'pointer' }}>
            <HiOutlineMail />
          </div>
          <p className="email-text" style={{ marginLeft: '10px' }}>Info@metapaygroup.co.uk</p>
        </div>
        <Button onClick={handleWriteUs} style={{ marginTop: '20px' }}>Write Us</Button>
      </div>
      {showNotification && (
        <div className="notification" style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
          <p style={{ color: 'green' }}>Copied!</p>
        </div>
      )}
    </div>
  );
};

export default Email;
