import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router';

const GoogleLogin = () => {

    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result =>{
            console.log(result.user)
            navigate("/")
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin}
                className="flex justify-self-center cursor-pointer py-3"
            >
                <FcGoogle size={35}></FcGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;