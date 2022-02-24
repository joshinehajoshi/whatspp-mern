import React from 'react';
import '../styling/sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default SideBar