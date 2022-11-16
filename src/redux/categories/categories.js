// ACTIONS
const CHECK_STATUS = 'bookstore/category/CHECK_STATUS';

// REDUCERS
const categories = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

// ACTION CREATORS
const category = () => ({
  type: CHECK_STATUS,
});

export default categories;
export { category };
