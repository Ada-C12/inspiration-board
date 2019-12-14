import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: "",
    };
  }

  onFieldChange = (event) => {
    const { name, value } = event.target;

    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      text: this.state.text,
      emoji: this.state.emoji,
    };

    this.setState({
      text: "",
      emoji: "",
    });

    this.props.addCardCallback(newCard);
  }

  emojiList = () => {
    const emojis = EMOJI_LIST.map((emojiName, i) => {
      return (
        <option key={i} name="emoji" value={emojiName} type="text" onChange={this.onFieldChange}>{emoji.getUnicode(emojiName)}</option>
      );
    });
    return (
        emojis
    )
  }

  render() {
    return (
      <div className="new-card-form">
        <div className="new-card-form__header">Add Card</div>
        <div className="new-card-form__form">
          <form onSubmit={this.onFormSubmit}>
            <div>
              <div className="new-card-form__form-label">Text</div>
              <textarea name="text" value={this.state.text} placeholder="text" type="text" onChange={this.onFieldChange} className="new-card-form__form-textarea" />
            </div>
            <div>
              <div className="new-card-form__form-label">Emoji</div>
              <select className="new-card-form__form-select">
                {this.emojiList()}
              </select>
            </div>
            <input type="submit" value="Create Card" className="new-card-form__form-button" />
          </form>
        </div>
      </div>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
