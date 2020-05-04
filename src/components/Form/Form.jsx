import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, method, body, username, password, token, disable, onChange, onSubmit, handleHeaders }) => (
  <div className={styles.Form}>
    <form onSubmit={onSubmit}>
      <div className={styles.formLeft}>    
        <input placeholder="Enter URL" type="text" name="url" value={url} onChange={onChange}></input>
        <div>
          <label><input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange} /> GET </label>
          <label><input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} /> POST </label>
          <label><input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange} /> PUT </label>
          <label><input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} /> PATCH </label>
          <label><input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} /> DELETE </label>
        </div>
        <textarea placeholder="Enter JSON Body" name="body" value={body} onChange={onChange} disabled={disable}></textarea>
        <button type="submit">Submit</button>
      </div>
      <div className={styles.formRight}>       
        <div className={styles.authDiv}>
          <h3>Basic Auth</h3>
          <label><input type="radio" name="auth" value="basic" onChange={handleHeaders} /> ON </label>
          <br></br>
          <input placeholder="Username" type="text" name="username" value={username} onChange={onChange}></input>
          <input placeholder="Password" type="text" name="password" value={password} onChange={onChange}></input>
        </div>
        <div className={styles.tokenDiv}>
          <h3>Bearer Token</h3>
          <label><input type="radio" name="auth" value="bearer" onChange={handleHeaders} /> ON </label>
          <br></br>
          <input placeholder="Bearer Token" type="text" name="token" value={token} onChange={onChange}></input> 
        </div>
        <div className={styles.extraDiv}>
          <label><input type="radio" name="auth" value="off" onChange={handleHeaders} /> NO AUTH </label>
        </div>
      </div>
    </form>
  </div>
);

Form.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  token: PropTypes.string,
  disable: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  handleHeaders: PropTypes.func
};

export default Form;
