import { v4 as uuidv4 } from 'uuid';

// ACTIONS
const REMOVE__BOOK = 'bookstore/book/REMOVE__BOOK';
const ADD__BOOK = 'bookstore/book/ADD__BOOK';

// DEFAULT BOOKS

const displayBooks = [
  {
    id: uuidv4(),
    title: 'RichDAD Poor DAD',
    author: 'KIYOSAKI',
  }, {
    id: uuidv4(),
    title: 'DAD FOR GIRLS',
    author: 'JA MANU',
  }, {
    id: uuidv4(),
    title: 'Traveller',
    author: 'JA MANU',
  }, {
    id: uuidv4(),
    title: 'My poor country',
    author: 'JA MANU',
  }, {
    id: uuidv4(),
    title: 'Marriage fix',
    author: 'JA MANU',
  }, {
    id: uuidv4(),
    title: 'Brotherhood',
    author: 'JA MANU',
  },
];
// REDUCERS
const bookReducer = (state = displayBooks, action) => {
  switch (action.type) {
    case REMOVE__BOOK:
      return state.filter((book) => book.id !== action.unique.id);
    case ADD__BOOK:
      return [...state, action.item];
    default:
      return state;
  }
};

// ACTIONS CREATORS
const addBook = (book) => ({
  type: ADD__BOOK,
  item: book,
});
addBook();

const removeBook = (id) => ({
  type: REMOVE__BOOK,
  unique: { id },
});

export default bookReducer;
export { removeBook, addBook };
