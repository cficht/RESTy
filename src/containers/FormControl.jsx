import React, { useState } from 'react';
import Form from '../components/Form/Form';

const FormControl = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'body') setBody(target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
  };

  return (
    <>
      <Form url={url} method={method} body={body} onChange={handleChange} onSubmit={handleSubmit}/>
    </>
  );
};

export default FormControl;
