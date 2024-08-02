import React, { useState } from 'react';

function JsonInput({ onSubmit }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const json = JSON.parse(input);
      setError(null);
      onSubmit(json);
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON here'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default JsonInput;