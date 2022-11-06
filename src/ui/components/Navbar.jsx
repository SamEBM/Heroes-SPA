import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {replace: true});
    };

    const {user, logout} = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <div className='container-fluid'>
                <Link className="navbar-brand ms-3" to="/">Heroes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav">

                        <NavLink 
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink 
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                    <ul className="navbar-nav ml-auto me-3">
                        <span className='nav-item nav-link text-light'>{user?.name}</span>
                        <button onClick={onLogout} className='nav-item nav-link btn'>Logout</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}