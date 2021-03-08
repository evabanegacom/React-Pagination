const filterReducer = (state = 'ALL', action) => {
  if (action.type === 'CHANGE_FILTERS') {
    return action.stockCategory;
  }
  return state;
};

export default filterReducer;
