// React imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Local imports
import Navbar from './Navbar'
import { getUserRoles } from '../hooks/authenticate'

const Home = () => {
    const [user, setUser] = React.useState('')
    let navigate = useNavigate();
    React.useEffect( () => {
        let user = getUserRoles();
        console.log(user)
        setUser(user)
    }, []);

    return(
        <>
            {user && <Navbar user={user} onLogout={() => navigate('/login')}/>}
            <div> 
                <h1>Welcome, {user.name} </h1> 
            </div>
        </>
    )
    
}

export default Home;