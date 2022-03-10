import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';

import DiscordImage from '../../assets/img/discord.svg';
import KycImage from '../../assets/img/kyc.png';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#e0e3bd',
    'background-color': '#121212',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '10px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
    // margin: "0px 0 -22px 0px",
  },
  toolbarTitle: {
    fontFamily: '"Amarante", cursive',
    fontSize: '30px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#e0e3bd',
    fontSize: '14px',
    margin: theme.spacing(1, 2),
    // margin: "0px 0 -12px 10px",
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  kyc: {
    height: '36px',
    width: '144px',
    margin: "0px 0 -12px 0px",
  },
  img: {
    width: '30px',
    height: '30px',
    margin: "0px 0 -12px 0px",
  },
  brandLink: {
    textDecoration: 'none',
    color: '#e0e3bd',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              {/* <a className={ classes.brandLink } href="/">Tomb Finance</a> */}
              <Link to="/" color="inherit" className={classes.brandLink}>
                Vinyl Finance
              </Link>
            </Typography>
            <Box mr={5}>
              {/* <a href="https://www.apeoclock.com/launch/vinyl-finance-genesis-pools-launch/" rel="noopener noreferrer" target="_blank" className={classes.link}>
                <img alt="discord" src={KycImage} className={classes.kyc} />
              </a> */}
              <Link color="textPrimary" to="/" className={classes.link}>
                Home
              </Link>
              <Link color="textPrimary" to="/club" className={classes.link}>
              {/* <Link color="textPrimary" to="/cemetery" className={classes.link}> */}
                Club
              </Link>
              <Link color="textPrimary" to="/studio" className={classes.link}>
              {/* <Link color="textPrimary" to="/masonry" className={classes.link}> */}
                Studio
              </Link>
              <Link color="textPrimary" to="/shop" className={classes.link}>
              {/* <Link color="textPrimary" to="/pit" className={classes.link}> */}
                Shop
              </Link>
              {/* <Link color="textPrimary" to="/sbs" className={classes.link}>
                SBS
              </Link>
              <Link color="textPrimary" to="/liquidity" className={classes.link}>
                Liquidity
              </Link>
              <Link color="textPrimary" to="/regulations" className={classes.link}>
                Regulations
              </Link> */}
              <a href="https://docs.vinyl.finance" className={classes.link}>
                Docs
              </a>
              {/* <a href="https://discord.gg/VqwsjEFVzc" rel="noopener noreferrer" target="_blank" className={classes.link}>
                <img alt="discord" src={DiscordImage} className={classes.img} />
              </a> */}
            </Box>
            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Vinyl Finance
            </Typography>

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItemLink primary="Home" to="/" />
                <ListItemLink primary="Club" to="/club" />
                {/* <ListItemLink primary="Club" to="/cemetery" /> */}
                <ListItemLink primary="Studio" to="/studio" />
                {/* <ListItemLink primary="Studio" to="/masonry" /> */}
                <ListItemLink primary="Shop" to="/shop" />
                {/* <ListItemLink primary="Shop" to="/pit" /> */}
                {/* <ListItemLink primary="SBS" to="/sbs" />
                <ListItemLink primary="Liquidity" to="/liquidity" />
                <ListItemLink primary="Regulations" to="/regulations" /> */}
                <ListItem button component="a" href="https://docs.vinyl.finance">
                  <ListItemText>Docs</ListItemText>
                </ListItem>
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
