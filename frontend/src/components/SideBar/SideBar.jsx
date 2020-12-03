import {Link} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  list: {
    width: 200,
  },
});

const SideBar = ({toggleDrawer, isOpen}) => {
  const classes = useStyles();
  return (
      <Drawer
          open={isOpen}
          onClose={() => {
            toggleDrawer(!isOpen);
          }}
      >
        <List
            className={classes.list}
            onClick={() => {
              toggleDrawer(!isOpen);
            }}
        >
          <ListItem button component={Link} to={'/profile'}>
            <ListItemIcon>
              <AccountCircleIcon/>
            </ListItemIcon>
            <ListItemText primary={'profile'}/>
          </ListItem>

        </List>
      </Drawer>
  );
};

export default SideBar;
