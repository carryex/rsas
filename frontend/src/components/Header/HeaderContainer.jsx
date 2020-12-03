import React from "react";
import { toogleIsOpen as toogleSideBarIsOpen } from "../../redux/navigationReducer";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/auth-reducer";

const HeaderContainer = ({toogleSideBarIsOpen, ...props}) => {
  const onMenuChanged = (sideBarIsOpen) => {
    toogleSideBarIsOpen(!sideBarIsOpen);
  };
  return <Header {...props} onMenuChanged={onMenuChanged} />;
}

let mapStateToProps = (state) => {
  return {
    sideBarIsOpen: state.navigation.isOpen,
    currentPageTitle: state.navigation.currentPageTitle,
    isAuth: state.auth.isAuth,
    login: state.auth.username,
  };
};

export default connect(mapStateToProps, {
  toogleSideBarIsOpen,
  logout,
})(HeaderContainer);
