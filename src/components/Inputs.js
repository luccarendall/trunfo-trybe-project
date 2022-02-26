/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class Inputs extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" data-testid="name-input" />

        <label htmlFor="bio">Descrição:</label>
        <input type="textarea" id="bio" name="bio" data-testid="description-input" />

        <label htmlFor="attr1">Attr1:</label>
        <input type="number" id="attr1" name="attr1" data-testid="attr1-input" />

        <label htmlFor="attr2">Attr2:</label>
        <input type="number" id="attr2" name="attr2" data-testid="attr2-input" />

        <label htmlFor="attr3">Attr3:</label>
        <input type="number" id="attr3" name="attr3" data-testid="attr3-input" />

        <label htmlFor="img">Imagem:</label>
        <input type="text" id="img" name="img" data-testid="image-input" />
        <br />
        <label htmlFor="rare">Raridade:</label>
        <select id="rare" name="rare" data-testid="rare-input">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <br />
        <br />
        <label htmlFor="checkbox">Super Trybe Trunfo</label>
        <input type="checkbox" id="checkbox" name="checkbox" data-testid="trunfo-input" />

        {/* onClick={ save }> */}
        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}

export default Inputs;
