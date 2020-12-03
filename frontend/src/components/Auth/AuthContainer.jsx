import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom';

const AuthContainer = ({isAuth, login}) => {
    const onSubmit = (formData) => {
        login(formData.username, formData.password)
    }
    if (isAuth) {
        return <Redirect to={"/"} />;
    }
    return (
        <div>
            <h1>Auth</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(AuthContainer);

