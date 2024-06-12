import React, { useState, useEffect } from 'react';
import { internalIpV4 } from 'internal-ip';
import QRCode from 'qrcode.react';
import '../styles/weblinkst.css'

function Web_link() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const ip = await internalIpV4();
        setIpAddress(ip);
      } catch (error) {
        console.error('Failed to get internal IP address:', error);
      }
    };

    fetchIp();
  }, []);

  const link = ipAddress ? `${ipAddress}:3000` : ''
  const fileUrl = ipAddress ? `${ipAddress}:3000/mycv.pdf` : ''; // URL to your PDF file

  return (
    <div>
    <div className='connection'>
      <QRCode value={fileUrl} 
       size={156} 
       bgColor="#ffffff" 
       fgColor="#000000" 
       level="H"
       solid = "white" 
      />
    </div>
    {/* <p>Scan QR to download My CV</p> */}
    </div>
    
  );
}

export default Web_link;
