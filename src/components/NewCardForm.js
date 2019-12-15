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
      emoji: ''
    };
  }

  onInputChange = (event) => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (this.state.text) {
      this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji
      });

      this.setState({
        text: '',
        emoji: ''
      });
    }
  }

  render () {
    const emojiOptions =  
    EMOJI_LIST.map((emojiChoice, y) => <option key={y} value={emojiChoice}>{emoji.getUnicode(emojiChoice)}</option>);
    
    return (
      <form className="new-card-form" onSubmit={this.onSubmit}>
        <h3 className="new-card-form__header">
          Add a Card
        </h3>
        <div className="new-card-form__form"> 

          <div>
            <label className="new-card-form__form-label" htmlFor="text">Text: </label>
            <textarea
              name="text"
              id="text"
              className="new-card-form__form-textarea"
              onChange={this.onInputChange}
              value={this.state.text}>
              {this.state.text}
            </textarea>
          </div>

          <div>
            <label className="new-card-form__form-label" htmlFor="emoji">Emoji:</label>
            <select className="new-card-form__form-select emojiSelect"
              name="emoji"
              id="emoji"
              onChange={this.onInputChange}
              value={this.state.emoji}
            >
            {emojiOptions}
            </select>
          </div>

          <div>
            <input
              className="new-card-form__form-button"
              type="submit"
              name="submit"
              value="Add a Card"
              onClick={this.onSubmitHandler}
            />
          </div>
      </div>
      </form>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
