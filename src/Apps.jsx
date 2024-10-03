import React from 'react';
import Mars from './Mars.png'; // Corrected the import syntax

function Apps() {
  return (
    <div>
      <img src={Mars} alt="Mars" /> {/* Added alt attribute for accessibility */}
    </div>
  );
}

export default Apps;
