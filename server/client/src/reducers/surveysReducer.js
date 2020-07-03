import { FETCH_SURVEYS, DELETE_SURVEY } from '../actions/types';

const defultState = [];

export default function(state = defultState, action){
    switch(action.type){
        case FETCH_SURVEYS:
            return action.payload;
        case DELETE_SURVEY:
            return [...state.filter((v,i) =>  v._id != action.payload._id )];
        default:
            return state;
    }
}