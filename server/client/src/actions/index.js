// import axios from 'axios';
const axios = require('axios');
// const Path = require('path-parser');
// const { URL } = require('url');

const {FETCH_USER, FETCH_SURVEYS, DELETE_SURVEY} = require('./types');
// import {} from './types';
// 


export const fetchUser =() => async dispatch => {
    const res = await axios.get('/api/current_user');
     dispatch({type: FETCH_USER, payload:res});
};

export const handleToken = (token)=> async dispatch=>{
    const res = await axios.post('/api/stripe',token);

    dispatch({type:FETCH_USER,payload:res});
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post("/api/surveys", values);
    history.push('/surveys');
    dispatch({type:FETCH_USER,payload:res});
};

export const fetchSurveys = () => async dispatch =>{
    const res = await axios.get('/api/surveys');
    dispatch({type: FETCH_SURVEYS, payload: res.data})
};

export const deleteSurvey = (survey) => async dispatch =>{
    const res = await axios.post('/api/surveys/deleteSurvey',survey);
    dispatch({type: DELETE_SURVEY, payload: survey})
    
};