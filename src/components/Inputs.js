/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropType from 'prop-types';

class Inputs extends React.Component {
  render() {
    // Adicionar prop "hasTrunfo" abaixo
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;

    return (
      <>
        <label htmlFor="name">
          Nome:
          <input type="text" id="name" name="name" data-testid="name-input" value={ cardName } onChange={ onInputChange } />
        </label>

        <label htmlFor="bio">
          Descrição:
          <input type="textarea" id="bio" name="bio" data-testid="description-input" value={ cardDescription } onChange={ onInputChange } />
        </label>

        <label htmlFor="attr1">
          Attr1:
          <input type="number" id="attr1" name="attr1" data-testid="attr1-input" value={ cardAttr1 } onChange={ onInputChange } />
        </label>

        <label htmlFor="attr2">
          Attr2:
          <input type="number" id="attr2" name="attr2" data-testid="attr2-input" value={ cardAttr2 } onChange={ onInputChange } />
        </label>

        <label htmlFor="attr3">
          Attr3:
          <input type="number" id="attr3" name="attr3" data-testid="attr3-input" value={ cardAttr3 } onChange={ onInputChange } />
        </label>

        <label htmlFor="img">
          Imagem:
          <input type="text" id="img" name="img" data-testid="image-input" value={ cardImage } onChange={ onInputChange } />
        </label>

        <label htmlFor="rare" value={ cardRare } onChange={ onInputChange }>
          Raridade:
          <select id="rare" name="rare" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        <label htmlFor="checkboxInput">
          CheckBox:
          <input type="checkbox" id="checkbox" name="checkbox" data-testid="trunfo-input" value={ cardTrunfo } onChange={ onInputChange } />
        </label>

        {/* onClick={ save }> */}
        <button type="submit" data-testid="save-button" disabled={ isSaveButtonDisabled } onClick={ onSaveButtonClick }>Salvar</button>
      </>
    );
  }
}

Inputs.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  // hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Inputs;
