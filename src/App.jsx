import { useState } from 'react';
import text from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    setCount(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(text.slice(0, count));
  };

  return (
    <div className='section-center'>
      <h4 className='title'>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' action='' onSubmit={handleSubmit}>
        <p>Paragraphs:</p>
        <label htmlFor='number' className='form-label'></label>
        <input
          type='number'
          className='form-input'
          id='number'
          onChange={handleChange}
          value={count}
          min={1}
          max={8}
        />
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
      {value.map((paragraph) => {
        const id = nanoid();
        return <p key={id}>{paragraph}</p>;
      })}
    </div>
  );
};
export default App;
