const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
