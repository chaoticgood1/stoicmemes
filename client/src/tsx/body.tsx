import * as React from 'react';
import Box from '@mui/material/Box';

import { Outlet } from "react-router-dom";

import SideBar from './sidebar/sidebar.tsx';
import SideBarWide from './sidebar/sidebar_wide.tsx';

export default function Body() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
    }}>
      <SideBar />
      <SideBarWide />
      <Outlet />
    </Box>
  );
}

