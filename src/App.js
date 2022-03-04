import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardLibrary: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.saveButtonDisabled = this.saveButtonDisabled.bind(this);
    this.saveButton = this.saveButton.bind(this);
  }

  onInputChange({ target }) {
    const info = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: info }, this.saveButtonDisabled);
  }

  // Referência para o saveButtonDisabled: https://github.com/tryber/sd-019-c-project-tryunfo/pull/88/
  saveButtonDisabled() {
    const min = 0;
    const max = 90;
    const maxsum = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (
      cardName !== ''
      && cardDescription !== ''
      && cardAttr1 >= min
      && cardAttr1 <= max
      && cardAttr2 >= min
      && cardAttr2 <= max
      && cardAttr3 >= min
      && cardAttr3 <= max
      && cardImage !== ''
      && cardRare !== ''
      && sum <= maxsum
      && cardRare.length <= maxsum
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  saveButton(event) {
    event.preventDefault();
    const newCard = this.state;
    this.setState((card) => ({
      hasTrunfo: card.cardTrunfo ? !card.hasTrunfo : card,
      cardLibrary: [...card.cardLibrary, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    }));
  }

  render() {
    const { cardLibrary } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.saveButton }
        />
        <Card { ...this.state } />
        { cardLibrary.map((element, index) => <Card key={ index } { ...element } />) }
      </div>
    );
  }
}

export default App;
