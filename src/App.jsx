import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(parseInt(e.target.value)); //returns an integer
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' action='' onSubmit={handleSubmit}>
        <p>Paragraphs:</p>
        <label htmlFor='amount' className='form-label'></label>
        <input
          type='number'
          className='form-input'
          name='amount'
          id='amount'
          onChange={handleChange}
          value={count}
          min='1'
          step='1'
          max='8'
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
