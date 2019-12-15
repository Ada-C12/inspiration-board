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
      emoji: '',

    };
  }

  onFormChange = (event) => {

    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onFormSubmint = (event) => {
    event.preventDefault();
    this.setState({
      text: '',
      emoji: '',
    });
    this.props.addCard(this.state.text,this.state.emoji);
    
  }

  render() {
    const emojiList = EMOJI_LIST.map((element, i) => {
      return (
      <option key={i} value={element}>{emoji.getUnicode(element)}</option>
      )
    });

    return (
      <form className="new-card-form" onSubmit={this.onFormSubmint}>
        <h3>Add Inspriration Card</h3>
        { /* A form should go here! */}
        <div className="new-card-form__form">
          <label className="new-card-form__form-label" htmlFor="text">Text</label>
          <input
            name="text"
            onChange={this.onFormChange}
            value={this.state.text}
            className="new-card-form__form-textarea"
          />
        </div>
        <div className="new-card-form__form">
          <label className="new-card-form-label" htmlFor="emoji">Emoji: </label>
          <select
            name="emoji"
            onChange={this.onFormChange}
            value={this.state.emoji}
            className="new-card-form__form-select">
            { emojiList }
          </select>
        </div>
        <input
          className="new-card-form__form-button"
          type="submit"
          value="Add a Card"
        />
      </form>
    );
  }
}
      
       
      

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};


export default NewCardForm;
