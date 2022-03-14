import * as React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Tabs, Tab } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

const pages = ['Products', 'Pricing', 'Blog'];

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function NavTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" indicatorColor="secondary" textColor='secondary'>
        <LinkTab label="Page One" href="/drafts" />
        <LinkTab label="Page Two" href="/trash" />
        <LinkTab label="Page Three" href="/spam" />
      </Tabs>
    </Box>
  );
}

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ mx: 6 }}>
          <Typography variant="h6" display="inline-block" sx={{ flexGrow: 1 }}>
            SAMPLE LOGO
          </Typography>
          <NavTabs />
          <IconButton sx={{ display: { xs: 'block', sm: 'none' } }} color="secondary">
            <PhotoCamera />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
