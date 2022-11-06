import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    
    const onLogin = () => {
        login('Samuel Miranda');
        navigate('/', {replace: true});
    };

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <p>This is a mock Login Page to test the use of private and public routes. To access the app simply click on the button.</p>
            <hr />

            <button onClick={onLogin} className='btn btn-primary'>
                Login
            </button>
        </div>
    )
};
