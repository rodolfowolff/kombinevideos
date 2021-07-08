import {
  AppBar,
  Box,
  Button,
  Toolbar,
  makeStyles,
  Hidden,
  Paper,
  InputBase,
  IconButton,
  Avatar,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useSession, signIn, signOut } from 'next-auth/client';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    height: 32,
    width: 32,
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700,
  },
  input: {
    flex: 1,
  },
}));

function TopBar() {
  const classes = useStyles();
  const [session] = useSession();

  return (
    <AppBar className={ classes.root } color='default'>
      <Toolbar className={ classes.toolbar }>
        <Box display='flex' alignItems='center'>
          <MenuIcon />
          <Image
            src='/new-video.svg'
            alt='logo kombine'
            height={ 20 }
            width={ 80 }
            layout='fixed'
          />
        </Box>

        <Hidden mdDown>
          <Box>
            <Paper component="form" className={ classes.search }>
              <InputBase
                className={ classes.input }
                placeholder="Pesquisar"
                inputProps={ { 'aria-label': 'search google maps' } }
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>

        <Box display='flex'>
          <IconButton className={ classes.icons }>
            <VideoCall />
          </IconButton>
          <IconButton className={ classes.icons }>
            <Apps />
          </IconButton>
          <IconButton className={ classes.icons }>
            <MoreVert />
          </IconButton>

          { !session ? (
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={ <AccountCircle /> }
              onClick={ () => signIn('google') }
            >
              Fazer Login
            </Button>
          ) : (
            <Box display='flex' alignItems='center'>
              <Avatar
                onClick={ () => signOut() }
                alt='User'
                className={ classes.avatar }
                src={ session?.user?.image }
              />
            </Box>
          ) }

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
