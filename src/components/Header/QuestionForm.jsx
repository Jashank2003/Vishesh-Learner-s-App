import React, { useState } from 'react';
import PropTypes from 'prop-types';

function QuestionForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, question };
    onSubmit(formData);
    setName('');
    setEmail('');
    setQuestion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="question">Question:</label>
        <textarea
          id="question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

QuestionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default QuestionForm;
