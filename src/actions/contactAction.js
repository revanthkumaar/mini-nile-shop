import * as actionTypes from './actionType';

export const createContact = (contact) => {
    return {
        type: actionTypes.CREATE_NEW_CONTACT,
        contact: contact
    }
}