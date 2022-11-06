import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './LoginPage.css';

export const LoginPage = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    
    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        login('Samuel Miranda');
        navigate(lastPath, {replace: true});
    };

    return (
        <div className='container mt-5 mb-5'>
            <div className="row justify-content-center">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-7">
                    <h1 className='text-center mb-4'>Heroes Single Page Application</h1>
                    <p className='lead'>This small app was built with React to reinforce my learning. You will be able to get information about some Marvel and DC heroes using a simple but fancy UI.</p>
                    <figure className='mt-4 text-end'>
                        <figcaption class="blockquote-footer">
                            Go ahead and find your favorite hero!
                        </figcaption>
                    </figure>
                    <hr />
                    <img className='img-fluid mb-2 animate__animated animate__pulse animate__slower' src="/assets/MarvelVSDC.jpg" alt="heroes" />
                    <div className="d-grid gap-2 col-5 mx-auto mt-3">
                        <button onClick={onLogin} className='btn btn-lg btn-dark'>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
