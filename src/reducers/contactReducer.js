import * as actionTypes from '../actions/actionTypes'

export default (state=[], action) => {
    switch(action.type){
        //to create the contact
        case actionTypes.CREATE_NEW_CONTACT:
            return [...state,Object.assign({},action.contact)];
        //to delete the contact
        case actionTypes.REMOVE_CONTACT:
            return state.filter((data,i) => i !== action.id);
        //default action is to return the state as is
        default:
            return state; 
    }

};

//we are returning a new state
//this new state = original state + new contact data