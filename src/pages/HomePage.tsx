import { useEffect, useContext }  from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import '../App.css';

const HomePage = () => {
    const { drinks,getDrinks} = useContext(GlobalContext);

    useEffect(() => {
        getDrinks();
      }, []);

     
    return(
        <div id='home'>
           
        <div className='row'>
            {drinks.map((drink, i) => {
            return (
                <div className=' card col-sm-12 col-md-3 mb-3' key={i}>
                    {/* Img */}
                <div className='sh-card-img'>
                    <div
                    className='sh-bg-img'
                    style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}></div>
                    </div>
                
                 {/* Details */}
                    <div className='card-body'>
                        <h4 className='card-title'>
                        {drink.strDrink}
                        </h4>
                        <h5 className='card-title'> {drink.strGlass}</h5>
                        <p><strong>Instructions:</strong>{drink.strInstructions}</p>
                    
    
                        <div className='my-2 d-flex justify-content-center'>
                            <Link to={`/cocktails/:cocktailId`} className='card-link'>
                            View Details
                            </Link>
                            
                        </div>  
                 </div>  
               </div>
      
        // </div>
        // </div>
          );
          
        })}
        </div>
     
    </div>
    )
};

export default HomePage;
