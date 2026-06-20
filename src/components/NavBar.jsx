import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DUBEMLOGO from '../assets/dubem4life-logo1.png';
import './NavBar.css'; // Connects all styles from your CSS sheet

const searchIndex = [
  { title: 'Home', keywords: ['home', 'main'], path: '/' },
  { title: 'Brain Box (ECU/ECM)', keywords: ['brainbox', 'ecu', 'ecm', 'engine', 'control', 'module'], path: '/products' },
  { title: 'Airflowmeters', keywords: ['airflow', 'meter', 'maf', 'sensor'], path: '/products' },
  { title: 'Immobilizers & Smartbox', keywords: ['immobilizer', 'smartbox', 'security', 'anti-theft'], path: '/products' },
  { title: 'Key Replacement & Duplication', keywords: ['key', 'keyless', 'remote', 'duplicate', 'fob'], path: '/services' },
  { title: 'Fuse Box & Fuel Pumps', keywords: ['fuse', 'pump', 'fuel', 'electrical'], path: '/products' },
  { title: 'Reprogramming Services', keywords: ['reprogramming', 'flashing', 'coding', 'programming'], path: '/services' },
  { title: 'About Us', keywords: ['about', 'who we are'], path: '/about-us' },
  { title: 'Contact Us', keywords: ['contact', 'support'], path: '/contact-us' },
  { title: 'FAQs', keywords: ['faq', 'questions'], path: '/faqs' },
  { title: 'Login', keywords: ['login'], path: '/login' },
  { title: 'Signup', keywords: ['signup', 'register'], path: '/signup' },
];

const NavBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path, scrollToId) => {
    navigate(path);
    if (scrollToId) {
      setTimeout(() => {
        const target = document.getElementById(scrollToId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setDrawerOpen(false);
    setFilteredResults([]);
    setSearchQuery('');
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredResults([]);
      return;
    }

    const results = searchIndex.filter(item =>
      item.keywords.some(keyword =>
        keyword.includes(query) || query.includes(keyword)
      )
    );

    setFilteredResults(results);
  };

  const handleSearchClick = () => {
    if (filteredResults.length > 0) {
      navigate(filteredResults[0].path);
      setFilteredResults([]);
      setSearchQuery('');
    }
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'ECU/Brainbox Products', path: '/products' },
    { label: 'Services & Programming', path: '/services' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us', scrollTo: 'contactUsForm' },
    { label: 'FAQs', path: '/faqs' },
    // { label: 'Login', path: '/login', scrollTo: 'loginForm' },
    // { label: 'Signup', path: '/signup', scrollTo: 'signupForm' },
  ];

  return (
    <AppBar position="static" className="navbar">
      {/* Set disableGutters to true to remove Material UI's hidden side spacing forces */}
      <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 0 }}>
        
        {/* Mobile Hamburger Icon - Explicit white styling ensures it appears on small screens */}
        <IconButton 
          edge="start" 
          onClick={handleToggleDrawer} 
          className="menu-icon" 
          sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff', ml: 1 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Brand Logo Wrapper */}
        <Box className="navbar-logo">
          <img src={DUBEMLOGO} alt="Dubem4Life Logo" height="65" style={{ objectFit: 'contain' }} />
        </Box>

        {/* Desktop Links Navigation */}
        <Box className="desktop-menu" sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              className="navbar-button"
              component={Link}
              to={item.path}
              onClick={() => handleNavigate(item.path, item.scrollTo)}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Search Layout Engine Container */}
        <div className="search">
          <div className="search-icon-wrapper">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search ECM, Fuses..."
            className="input-root"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="contained" className="search-button" onClick={handleSearchClick}>
            Search
          </Button>

          {/* Real-time search rendering */}
          {searchQuery && (
            <div className="search-results">
              {filteredResults.length > 0 ? (
                filteredResults.map((item, index) => (
                  <div key={index} className="search-result-item" onClick={() => handleNavigate(item.path)}>
                    {item.title}
                  </div>
                ))
              ) : (
                <div className="no-results">No components found</div>
              )}
            </div>
          )}
        </div>
      </Toolbar>

      {/* Navigation drawer viewport for mobile devices */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleToggleDrawer}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton onClick={() => handleNavigate(item.path, item.scrollTo)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;