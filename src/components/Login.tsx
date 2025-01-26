import {useNavigate} from "react-router";
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase/firbaseConfig.ts";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        await signInWithPopup(auth, provider);
        navigate("/view-okrs");
    }

    return <div className="flex h-full items-center justify-center dark:bg-dark">
        <button className="bg-sky-500 px-4 py-2 rounded-md text-white" onClick={handleLogin}>Login with google</button>
    </div>;
};

export default Login;
