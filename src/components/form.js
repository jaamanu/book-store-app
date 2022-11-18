import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../redux/book/book';
import './form.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addNewBook = (e) => {
    e.preventDefault();
    if (author === '' || title === '' || category === '') {
      return false;
    }
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
    return true;
  };

  const Err = () => {
    if (author === '' || title === '' || category === '') {
      return (
        <p>Complete the form below</p>
      );
    } return true;
  };

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const authorInput = (e) => {
    setAuthor(e.target.value);
  };

  const add = (e) => {
    setCategory(e.target.value);
  };

  return (
    <section className="formSection">
      <div className="error">
        <Err />
      </div>
      <h1 className="newBook">ADD NEW BOOK</h1>
      <form className="form" onSubmit={addNewBook}>
        <input type="text" placeholder="Enter Title" onChange={titleInput} value={title} />
        <input type="text" placeholder="Enter Author" onChange={authorInput} value={author} />
        <select name="select" className="select" onChange={add}>
          <option value="categories" selected disabled>categories</option>
          <option>Mystery</option>
          <option>Poetry</option>
          <option>Short Stories</option>
          <option>Thrillers</option>
          <option>War</option>
          <option>Horror</option>
          <option>Classics</option>
          <option>Adventuries Stories</option>
          <option>Women Fiction</option>
          <option>Young Adult</option>
          <option>Biography</option>
        </select>
        <button type="submit" className="btn">Add Book</button>
      </form>
    </section>
  );
};

export default Form;
