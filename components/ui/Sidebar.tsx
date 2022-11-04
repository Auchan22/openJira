import { FC } from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

export const Sidebar: FC = () => {
  return (
    <Drawer anchor='left' open={true} onClose={() => console.log('Cerrando')}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menú</Typography>
          <List>
            {menuItems.map((el, index) => (
              <ListItem button key={el}>
                <ListItemIcon>
                  {index % 2 ? <InboxIcon /> : <EmailIcon />}
                </ListItemIcon>
                <ListItemText primary={el} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
      </Box>
    </Drawer>
  );
};
