import React from 'react';
import QuestionForm from './QuestionForm';

function InterviewPage() {
  const handleSubmit = (formData) => {
    console.log(formData); //For Submission of Form data on the same screen. We can redirect it to the backend.
  };

  return (
    <div>
      <h1>Interview with VIP</h1>
      <QuestionForm onSubmit={handleSubmit} />
    </div>
  );
}

export default InterviewPage;