import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import SingleDrink from '../components/SingleDrink';

const SingleDrinkPage = () =>{
    const { drink, getSingleDrink } =useContext(GlobalContext);
    const { drinkId } =useParams<{ drinkId: string }>();

    useEffect(() => {
        getSingleDrink(+drinkId);
    }, [drinkId]);

    return (
        <div id='drink'>
            <div className='row'>
                <div className='col-sm-12 md-8 offset-md-2'>
                    <SingleDrink drink={drink}/>
                </div>
            </div>
        </div>
    );
};

export default SingleDrinkPage;