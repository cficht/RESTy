import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {
  it('renders Form', () => {
    const wrapper = shallow(<Form 
      url=""
      method=""
      body=""
      username=""
      password=""
      token=""
      disable={true}
      onChange={() => {}}
      onSubmit={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
