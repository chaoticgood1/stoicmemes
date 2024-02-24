import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import { Link } from "react-router-dom";

// function generate(element: React.ReactElement) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }


const paths = {
  'Home': '/', 
  'Portfolio': '/portfolio', 
  'About': '/about'
};


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  return (
    <Box sx={{
      display: { xs: 'none', lg: 'block'}, 
      flexGrow: 1, 
      minWidth: 300,
      maxWidth: 300,
    }}>
      <Demo>
        <List>
          {Object.entries(paths).map(([key, value]) => (
            <ListItem key={key} disablePadding>
              <ListItemButton>
                
                <Link to={value}>{key}</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Demo>




      {/* <Demo>
        <List>
          {generate(
            <ListItem>
              <ListItemText
                primary="Single-line item"
              />
            </ListItem>,
          )}
        </List>
      </Demo> */}
    </Box>
  );
}