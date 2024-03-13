import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { composeWithDevTools } from 'redux-devtools-extension'

// Define a sample reducer as an example. Replace or remove it according to your actual app structure.
const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    // Handle some case
    // case 'ACTION_TYPE':
    //     return newState;
    default:
      return state;
  }
};

// Use combineReducers to combine different reducers
const rootReducer = combineReducers({
  // Add your reducers here. For now, we have just a sampleReducer.
  sample: sampleReducer,
  // Other reducers can be added here as needed.
});

const store = configureStore({
  reducer: rootReducer,
  // middleware can be customized here if needed.
});

export default store;