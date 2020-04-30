import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = () => (
  <div className={styles.Form}>
    <form>
      <label>Url:<input type="text"></input></label> 
      <div>
        <label><input type="radio" name="method" value="get" />GET</label>
        <label><input type="radio" name="method" value="post" />POST</label>
        <label><input type="radio" name="method" value="put" />PUT</label>
        <label><input type="radio" name="method" value="patch" />PATCH</label>
        <label><input type="radio" name="method" value="delete" />DELETE</label>
      </div>
      <textarea placeholder="Body"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
);

Form.propTypes = {

};

export default Form;
