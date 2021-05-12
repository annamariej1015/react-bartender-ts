import { Switch, Route } from 'react-router-dom';
// page components
import HomePage from '../pages/HomePage';
import SingleDrinkPage from '../pages/SingleDrink';
// Components
import Navbar from '../components/Navbar';

const AppRoutes = () => {
    return (
    <div>
        <Navbar />
        <div className='container-fluid'>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/cocktails/:cocktailId' component={SingleDrinkPage}/>
            </Switch>
        </div>
    </div>
    );
};

export default AppRoutes;
