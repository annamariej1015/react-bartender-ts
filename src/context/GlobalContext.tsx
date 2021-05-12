import React, { createContext, useReducer } from 'react';
import instance from '../api/apiConfig';

const initialState = {
    Drinks:[],
    drink: [],
    is_loading: false,
    getDrinks: () => {},
    getSingleDrink: () => {},
};

const appReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_DRINKS':
            return {...state, drinks: action.payload, is_loading: false };
        case 'GET_SINGLE_DRINK':
            return{...state, drink: action.payload, is_loading: false };
        case 'SET_LOADING':
            return{...state, is_loading: action.payload };
        default:
            return state;
    }
};

export const GlobalContext = createContext<InitialStateType>(initialState);


export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const getDrinks = async () => {
        dispatch({ type: 'SET_LOADING', payload: true});
        try{
            let { data } = await instance.get('/drink');
            dispatch ({ type: 'GET_DRINKS', payload: data});
        } catch (e) {
            console.log(e);
        }
    };

    const getSingleDrink = async (drinkId: number) =>{
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
            let { data } = await instance.get(`/drink/${drinkId}`);
            console.log(data);
            dispatch({ type: 'GET_SINGLE_PRODUCT', payload: data });
        } catch (e) {
            console.log(e);
        }
    };
    return(
        <GlobalContext.Provider
            value={{
                drinks: state.drinks,
                drink: state.drink,
                is_loading: state.is_loading,
                getDrinks,
                getSingleDrink,
            }}>
            {children}
        </GlobalContext.Provider>
    )

}
