import React from 'react';
import Inputs from './Inputs'; // não esquecer o ./

class Form extends React.Component {
  render() {
    return (
      <>
        <h2>Adicionar nova carta</h2>
        <Inputs />
      </>
    );
  }
}

export default Form;
