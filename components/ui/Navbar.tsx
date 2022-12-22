import NextLink from 'next/link';
import { AppBar, IconButton, Toolbar, Typography, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { FC, useContext } from 'react';
import { UIContext } from '../../context/ui';

export const Navbar: FC = () => {
  const { openSideMenu } = useContext(UIContext);
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuIcon />
        </IconButton>
        <NextLink href='/' passHref legacyBehavior>
          <Link underline='none' color='white'>
            <Typography variant='h6'>Open Jira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
