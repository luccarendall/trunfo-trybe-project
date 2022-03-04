import React from 'react';

import PropType from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;

    return (
      <>
        <div data-testid="name-card">
          {/* <cardName /> Entender pq usar assim ou da forma de baixo */}
          { cardName }

        </div>

        <img data-testid="image-card" src={ cardImage } alt={ cardName } />

        <div data-testid="description-card">
          { cardDescription }

        </div>

        <div>
          <h2 data-testid="attr1-card">{ cardAttr1 }</h2>

          <h2 data-testid="attr2-card">{ cardAttr2 }</h2>

          <h2 data-testid="attr3-card">{ cardAttr3 }</h2>

        </div>

        <div data-testid="rare-card">
          { cardRare }

        </div>

        {cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div> : ''}
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string,
  cardDescription: PropType.string,
  cardAttr1: PropType.string,
  cardAttr2: PropType.string,
  cardAttr3: PropType.string,
  cardImage: PropType.string,
  cardRare: PropType.string,
  cardTrunfo: PropType.bool,
}.isRequired;

export default Card;
