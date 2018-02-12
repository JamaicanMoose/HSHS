import firebase from "../firebase";
import {store} from './store.js';

export const getGuestsStart = () => ({
	type: 'GET_GUESTS_START'
})

export const getGuestsSuccess = (data) => ({
	type: 'GET_GUESTS_SUCCESS',
	payload: data
})

export const getGuests = () => {
		store.dispatch(getGuestsStart());
		firebase.database()
				.ref('guests')
				.on('value', (snapshot) => {
					store.dispatch(getGuestsSuccess(snapshot.val()));
				});
}

export const getInteractionsStart = () => ({
	type: 'GET_INTERACTIONS_START'
})

export const getInteractionsSuccess = (data) => ({
	type: 'GET_INTERACTIONS_SUCCESS',
	payload: data
})

export const getInteractions = () => {
	store.dispatch(getInteractionsStart());
	firebase.database()
			.ref('interactions')
			.on('value', snapshot => {
				store.dispatch(getInteractionsSuccess(snapshot.val()));
			})
}

export const getActionItemsStart = () => ({
        type: 'GET_ACTION_ITEMS_START'
})

export const getActionItemsSuccess = (data) => ({
        type: 'GET_ACTION_ITEMS_SUCCESS',
        payload: data
})

export const getActionItems = () => {
        store.dispatch(getActionItemsStart());
        firebase.database()
                        .ref('actionItems')
                        .on('value', snapshot => {
                        	store.dispatch(getActionItemsSuccess(snapshot.val()));
                        })
}

export const addNewGuestStart = () => ({
	type: 'ADD_NEW_GUEST_START'
})

export const addNewGuestSuccess = () => ({
	type: 'ADD_NEW_GUEST_SUCCESS'
})

export const addNewGuest = (name, age, gender, description, interactions, actionItems) => {
	store.dispatch(addNewGuestStart);
	firebase.database().ref('guests').push().set({
    		name: name,
    		age: age,
    		gender : gender,
        description: description
  });
}

export const editGuestStart = () => ({
    type: 'EDIT_GUEST_START'
})

export const editGuestSuccess = () => ({
    type: 'EDIT_GUEST_SUCCESS'
})

export const editGuest = (id, name, age, gender, description, interactions, actionItems) => {
    store.dispatch(editGuestStart);
    firebase.database().ref('guests' + '/' + id).set({
            name: name,
            age: age,
            gender : gender,
        description: description
  });
}

export const deleteGuestStart = () => ({
    type: 'DELETE_GUEST_START'
});

export const deleteGuestSuccess = () => ({
    type: 'DELETE_GUEST_SUCCESS'
})

export const deleteGuest = (id) => {
    store.dispatch(deleteGuestStart);
     firebase.database().ref('guests' + '/' + id).delete();
}

export const addNewActionItemStart = () => ({
        type: 'ADD_NEW_ACTION_ITEMS_START'
})

export const addNewActionItemSuccess = () => ({
        type: 'ADD_NEW_ACTION_ITEMS_SUCCESS'
})

export const addNewActionItem = (isDone, title, creationTimestamp, locationCoord, locationStr, shiftDate, description, guestIds, volunteerId) => {
                store.dispatch(addNewActionItemStart);
                firebase.database().ref('actionItems').push().set({
                        isDone: isDone,
                        title: title,
                        creationTimestamp: creationTimestamp,
                        locationCoord: {
                            lat: locationCoord.latitude,
                            lng: locationCoord.longitude,
                        },
                        locationStr: locationStr,
                        shiftDate: shiftDate,
                        description: description,
                        guestIds: guestIds,
                        volunteerId: volunteerId
                })
}

export const editActionItemStart = () => ({
        type: 'EDIT_NEW_ACTION_ITEMS_START'
})

export const editActionItemSuccess = () => ({
        type: 'EDIT_NEW_ACTION_ITEMS_SUCCESS'
})

export const editActionItem = (id, isDone, title, creationTimestamp, locationCoord, locationStr, shiftDate, description, guestIds, volunteerId) => {
                store.dispatch(editActionItemStart);
                firebase.database().ref('actionItems' + '/' + id).set({
                        isDone: isDone,
                        title: title,
                        creationTimestamp: creationTimestamp,
                        locationCoord: {
                            lat: locationCoord.latitude,
                            lng: locationCoord.longitude,
                        },
                        locationStr: locationStr,
                        shiftDate: shiftDate,
                        description: description,
                        guestIds: guestIds,
                        volunteerId: volunteerId
                })
}

export const deleteActionItemStart = () => ({
    type: 'DELETE_ACTION_ITEM_START'
})

export const deleteActionItemSuccess = () => ({
    type: 'DELETE_ACTION_ITEM_SUCCESS'
})

export const deleteActionItem = (id) => {
    store.dispatch(deleteActionItemStart);
     firebase.database().ref('actionItems' + '/' + id).delete();
}

export const addNewInteractionStart = () => ({
        type: 'ADD_NEW_INTERACTIONS_START'
})

export const addNewInteractionSuccess = () => ({
        type: 'ADD_NEW_INTERACTIONS_SUCCESS'
})

export const addInteractionItem = (description, details, location, receptiveness, resources, timestamp, volunteers) => {
                store.dispatch(addNewActionItemStart);
                firebase.database().ref('interactions').push().set({
                        description: description,
                        details: details,
                        location: location,
                        receptiveness: receptiveness,
                        resources: resources,
                        timestamp: timestamp,
                        volunteers: volunteers
                })
}

export const editInteractionStart = () => ({
        type: 'EDIT_INTERACTIONS_START'
})

export const editNewInteractionSuccess = () => ({
        type: 'EDIT_INTERACTIONS_SUCCESS'
})

export const editInteractionItem = (id, description, details, location, receptiveness, resources, timestamp, volunteers) => {
                store.dispatch(editInteractionStart);
                firebase.database().ref('interactions' + '/' + id).set({
                        description: description,
                        details: details,
                        location: location,
                        receptiveness: receptiveness,
                        resources: resources,
                        timestamp: timestamp,
                        volunteers: volunteers
                })
}

export const deleteInteractionStart = () => ({
    type: 'DELETE_INTERACTIONS_START'
})

export const deleteInteractionSuccess = () => ({
    type: 'DELETE_INTERACTIONS_SUCCESS'
})

export const deleteInteractionItem = (id) => {
    store.dispatch(deleteActionItemStart);
     firebase.database().ref('interactions' + '/' + id).delete();
}
