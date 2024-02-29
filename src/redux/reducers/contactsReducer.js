import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [
    { id: nanoid(), name: 'Dragan Rares', number: '0730256901 ' },
    { id: nanoid(), name: 'Niculescu Albert', number: '0730256901 ' },
    { id: nanoid(), name: 'Marin Ionela', number: '0730256901 ' },
    { id: nanoid(), name: 'Dragan Ionut', number: '0730256901 ' },
  ],
};

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export default persistedContactsReducer;
