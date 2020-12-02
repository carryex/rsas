import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {compose} from "redux";
import AuthContainer from "./components/Auth/AuthContainer";

const App = () => {
    return (
        <div className="app">
            <Route path="/" render={() => <AuthContainer/>}/>
        </div>
    );
}


const AppContainer = compose(
    withRouter
)(App);

const RsasApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
};
export default RsasApp;