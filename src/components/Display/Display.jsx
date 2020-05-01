import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import styles from './Display.css';


const Display = ({ response }) => {
  return (
    <div className={styles.Display}>
      <ReactJson src={response} theme="tomorrow" name="Response"/>
    </div>
  );
};

Display.propTypes = {
  response: PropTypes.string
};

export default Display;
