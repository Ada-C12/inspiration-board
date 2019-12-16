import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

// const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      text: '',
    }
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitCard = (event) => {
    event.preventDefault();
    
    const newCard = {
      id: this.state.id,
      text: this.state.text,
    }

    this.props.addCardCallback(newCard);

    this.setState({
      id: '',
      text: '',
    });
  }

  render() {
    return (
      <div className="NewCardForm">
        <h3>Submit Inspiration Note</h3>

        <form className="NewCardForm__form" onSubmit={this.onSubmitCard}>

          <div className="NewCardForm__note-input">
            <input
              name="text"
              placeholder="Inspirational note here"
              type="text" 
              onChange={this.onInputChange}
              value={this.state.text}
            />
          </div>

          <div className="NewCardForm__submit">
            <input type="submit" value="Submit Note" className="NewCardForm__submit-btn" />
          </div>
        </form>
      </div>
    ); 
  }
}

export default NewCardForm;

