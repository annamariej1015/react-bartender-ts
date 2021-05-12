import React, { createContext, useState, useReducer } from 'react';
import instance from '../api/apiConfig';

const initialState = {

};

// Create our global reducer
// reducer is a function that allows us to handle and update state
/*
 - reducer will take an initial state
 - will receive an action declaration
 - will look to update our state based on the desired action
 - will return our updated state
 - our reducer takes two parameters. 
    - the first is our initialState so that we can update it accordingly
    - the second param is the action object that gets 
    - passed into dispatch({type:'some_action', payload:'some data'})
*/

// export const GlobalContext = createContext<InitialStateType>(initialState);

// Create Global provider which will feed state to our components

 // Actions = methods that run tasks for our app


