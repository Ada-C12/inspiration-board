import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      text: '',
      emoji: '',
    };
  }

  resetState = () => {
    this.setState({
      id: '',
      text: '',
      emoji: '',
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      id: this.state.id,
      text: this.state.text,
      emoji: this.state.emoji,
    };

    this.setState({
      id: '',
      text: '',
      emoji: '',
    })

    this.props.addCardCallback(newCard);
    this.resetState();
  }

  onFormChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState)
  }


  render() {
    const emojiInput = EMOJI_LIST.map((element) => {
      return (
      <option value={element}>{emoji.getUnicode(element)}</option>
      )
    })
    
    return (
      <div>
        <h2 className="new-card-form__header">Add a Card</h2>
        <form onSubmit={this.onSubmit} name="new-card-form" id="new-card-form" className="new-card-form new-card-form__form">
          <div>
            <textarea className="new-card-form__form-textarea" name="text" placeholder="text" onChange={this.onFormChange} value={this.state.text} />
          </div>
          <div>
            <select className="new-card-form__form-label new-card-form__form-select" name="emoji" onChange={this.onFormChange} value={this.state.emoji}>
              {emojiInput}
            </select>
          </div>
          <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
        </form>
      </div>
    );
  }
}

export default NewCardForm;
