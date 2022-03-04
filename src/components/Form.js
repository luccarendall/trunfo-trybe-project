import React from 'react';
import PropType from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Descrição:
            <input
              type="textarea"
              id="description"
              cols="5"
              rows="5"
              name="cardDescription"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr1">
            Atributo 01:
            <input
              type="number"
              id="attr1"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr2">
            Atributo 02:
            <input
              type="number"
              id="attr2"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="attr3">
            Atributo 03:
            <input
              type="number"
              id="attr3"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="img">
            Imagem:
            <input
              type="text"
              id="img"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare">
            Raridade da Carta:
            <select
              onChange={ onInputChange }
              name="cardRare"
              value={ cardRare }
              data-testid="rare-input"
              id="rare"
            >
              <option value="normal"> normal </option>
              <option value="raro"> raro </option>
              <option value="muito raro"> muito raro</option>
            </select>
          </label>
        </div>

        {/* Lembrete pessoal: Passei 2 horas com erro no select e checkbox por pura falta de atenção ao código e a um detalhe no requisito. Lembrar de ler novamente com atenção sempre que travar */}
        <div>
          <label htmlFor="checkbox">
            Super Trybe Trunfo
            <input
              type="checkbox"
              id="checkbox"
              name="cardTrunfo"
              value="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <br />
        {/* onClick={ save }> */}
        <div>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,
  // hasTrunfo: PropType.bool,
  isSaveButtonDisabled: PropType.bool,
  onInputChange: PropType.func,
  onSaveButtonClick: PropType.func,
}.isRequired;

export default Form;
