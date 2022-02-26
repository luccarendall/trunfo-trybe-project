import React from 'react';
import Inputs from './Inputs'; // não esquecer o ./

class Form extends React.Component {
  render() {
    // eslint-disable-next-line max-len
    return (
      <>
        <h2>Adicionar nova carta</h2>
        <Inputs />
      </>
    );
  }
}

export default Form;
