"use client"

import { useEffect } from 'react';

const Tawk = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/690abe501384f91953f5c36b/1j98verit'; // Your Tawk.to widget URL
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    // Append the script to the document head
    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(script);

    return () => {
      // Cleanup: Remove the script on component unmount
      head.removeChild(script);
    };
  }, []);

  return null; // No JSX to render
};

export default Tawk;
