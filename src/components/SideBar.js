import React from 'react';
import '../styling/sidebar.css';
import ChatIcon from '@mui/icons-material/Chat';
import { Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';

function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
          <Avatar src="https://avatars.githubusercontent.com/u/40416505?v=4"/>
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_searchContainer">
          <div className="sidebar_search"></div>
          <SearchOutlined  />
          <input placeholder="Search or start now chat"
            type="text" />
        </div>
    </div>
  )
}

export default SideBar