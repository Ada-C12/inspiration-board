import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: null,
    };
  }
  getEmoji = (code) => {
    if (code !== null) {
    return (
    emoji.getUnicode(code)
    )
    }
  };

  makeDropDownOptions = () => {
    return EMOJI_LIST.map((emoji,key) => {
      return <option key={key} value={emoji}>{this.getEmoji(emoji)}</option>
    })
  }


  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;
    
    updatedState[field] = value;
    this.setState(updatedState);
    console.log(updatedState);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`submit handling: ${this.state.emoji}`)
    if (this.state.text && this.state.emoji) {
      this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji,
      });

      this.setState({
        text: '',
        emoji: null,
      });
    }
  }

  render () {
    return (
      <div className="new-card-form">
         <h3 className="new-card-form__header">Add a Card</h3>
            <form className="new-card-form__form" onSubmit={this.onSubmitHandler}>
              <label className="new-card-form__form-label" htmlFor="text">Text: </label>
              <input
                className="new-card-form__form-textarea"
                name="text"
                id="text"
                onChange={this.onInputChange}
                value={this.state.text}
              />

            <label className="new-pet-form--label" htmlFor="species">Emoji: </label>
            <select
              className="new-card-form__form-select"
              name="emoji"
              id="emoji"
              onChange={this.onInputChange}
              value={this.state.emoji}
            >
              {this.makeDropDownOptions()}
            </select>
            <input
              className="new-card-form__form-button"
              type="submit"
              name="submit"
              value="Add a Card"
              onClick={this.onSubmitHandler}
            />
        </form>
        </div>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;