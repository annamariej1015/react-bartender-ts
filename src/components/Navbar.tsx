import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link to='/' className='navbar-brand'>
                Drinksy
            </Link>

            <div className='collapse navbar-collapse'>
                <div className='navbar-nav'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;