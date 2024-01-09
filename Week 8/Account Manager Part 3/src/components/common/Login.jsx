import { useContext } from "react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from "../../AppContext"
import { Card } from "./Card"
import { TextField } from "./TextField"

export const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const context = useContext(AppContext);

    const [ userName, setUserName ] = useState('');

    return <div className="container pt-3">
        <Card title="Login">
        <TextField label="User Name"
            value={userName}
            setValue={setUserName} />
        <button type="button"
            className="btn btn-success btn-lg col-12 mt-4"
            onClick={() => {
                context.setUserName(userName);
                navigate(location.state?.from || '/');
            }}>
            Login
        </button>
    </Card>
    </div>
}