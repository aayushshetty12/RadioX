

import React, { useState } from 'react';
import './Sidebar.css';
import navlogo from '../../../images/Radiox-logo.png';

interface SidebarProps {
  
}

const Sidebar: React.FC<SidebarProps> = () => {
  
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  
  return (
    <div className="doctor-sidebar ">
      <img src={navlogo} alt="Qure Logo" width={50} height={'auto'} />
      
      <ul>
        <span>MEDICAL</span>
        <li
          className={selectedItem === 'Doctors' ? 'selected' : ''}
          onClick={() => handleItemClick('Doctors')}
        >Doctors</li>
        <li>Hospitals</li>
        <li>Specialties</li>
        <li>Appointments</li>
      </ul>
      <ul>
        <span>Imaging</span>
        <li>Health Tips</li>
        <li>Diseases</li>
        <li>Medications</li>
      </ul>
      <ul>
        <span>ICU</span>
        <li>Research</li>
        <li>Wellness</li>
        <li>Emergency</li>
      </ul>
      <ul>
        <span>UPDATES</span>
        <li>News</li>
        <li>Events</li>
        <li>Community</li>
      </ul>
    </div>
  );
};

export default Sidebar;
