import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import AuthPage from './AuthPage';

const AuthContainer = ({isAuth, login}) => {
  const onSubmit = (formData) => {
    login(formData.username, formData.password);
  };
  if (isAuth) {
    return <Redirect to={'/'}/>;
  }
  return <AuthPage onSubmit={onSubmit}/>;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(AuthContainer);

