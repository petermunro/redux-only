import { createStore } from 'redux';

let initialState = {
  contacts: []
};

let contactReducer = function(state = initialState, action) {
  console.log(`contactReducer: state is:`, state, `, action is:`, action);

  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.contact]
      };
  }
}

let store = createStore(contactReducer);

console.log('store:', store);

store.subscribe(() => {
	console.log('SUBSCRIBER:', store.getState().contacts);
});

store.dispatch({
  type: 'ADD_CONTACT',
  contact: {
    name: 'Peter',
    address: 'Ireland'
  }
})

console.log(`store state:`, store.getState());
