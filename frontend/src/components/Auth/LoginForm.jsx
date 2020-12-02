import {reduxForm} from "redux-form";
import {Input, createField} from "../UI/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("login", "login", [required], Input, "text")}
            {createField("password", "password", [required], Input, "password")}
            {error && <div>{error}</div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: "login",
})(LoginForm);
