import React from 'react';
import {connect} from 'react-redux';
import SideBar from './SideBar';
import {toogleIsOpen} from '../../redux/navigationReducer';

const HeaderContainer = ({toogleIsOpen, isOpen}) => {
  const toggleDrawer = (isOpen) => {
    toogleIsOpen(isOpen);
  };

  return (
      <SideBar isOpen={isOpen} toggleDrawer={toggleDrawer}/>
  );
};

let mapStateToProps = (state) => {
  return {
    isOpen: state.navigation.isOpen,
  };
};
export default connect(mapStateToProps, {toogleIsOpen})(HeaderContainer);
