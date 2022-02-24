import React from 'react';
import '../styling/sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

function SideBar() {
  return (
    <div className="sidebar">
        <h1>SideBar</h1>
        <div className="sidebar_header">
          <div className="sidebar_headerRight">
            <DonutLargeIcon />
          </div>
        </div>
    </div>
  )
}

export default SideBar