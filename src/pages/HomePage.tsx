import { useEffect, useContext }  from 'react';
import { GlobalContext } from '../context/GlobalContext';

const HomePage = () => {
    const { drinks,getDrinks} = useContext(GlobalContext);

    useEffect(() => {
        getDrinks();
      }, []);

     
    return(
        <div id='home'>
            <div className='row text-center'>
            <div className='col'>
                <h2>Home Page!</h2>
            </div>
            </div>
        <div className='row'>
            {drinks.map((drink, i) => {
            return (
                <div className='card h-100 product-card-hover d-flex flex-column justify-content-between'> 
                      <div className='card-body'>
          <h5 className='card-title'>
           {drink.idDrink}
          </h5>
          <div className='d-flex justify-content-between align-items-center'>
            <strong>{drink.strCategory}</strong>
            <h2>{drink.strImageSource}</h2>
           
          </div>
        </div>
        </div>
           
          );
        })}
        </div>
     
    </div>
    )
};

export default HomePage;
