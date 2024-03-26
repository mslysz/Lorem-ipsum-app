import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    e.preventDefault();
    setCount(e.target.value);
  };
  console.log(count);
  return (
    <div className='section-center'>
      <h4 className='title'>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' action=''>
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
    </div>
  );
};
export default App;
