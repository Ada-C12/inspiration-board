import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';
import Axios from 'axios';



class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
    text: '',
    emoji: '',
    };

    this.EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"];
  }

  handleChange = (event) => {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log(this.state);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`here's the thing you are sending: ${this.state.text} ${this.state.emoji}`)
    if (this.state.text && this.state.emoji ) {
      this.props.addCardCallback({"text": this.state.text, "emoji": this.state.emoji});

      this.setState({
        text: '',
        emoji: '',
      });
    }
  }
  
  render() {
    return (
      <div className="new-card-form" >
        <form className="new-card-form__form" onSubmit={this.handleSubmit}>
          <div>
            <header className="new-card-form__header">add a card</header>
            <label new-card-form__form-label="new-card-form__label">text:</label>
            <textarea
              value={this.state.text}
              name="text"
              placeholder="enter card text here"
              onChange={this.handleChange}
              className="new-card-form__form-textarea" />
              
            <select
            name="emoji"
            id="emoji"
            onChange={this.handleChange}
            value={this.state.emoji}>
              {
                this.EMOJI_LIST.map((anEmoji, i) => {
                  return(
                  <option value={anEmoji} key={i}>{emoji.getUnicode(anEmoji)}</option>
                  );
                })
              }
          </select>
          </div>
          <button 
            className="new-card-form__form-button"
            onClick={this.onFormSubmit}>submit</button>
        </form>
      </div>
    )
  }
};

export default NewCardForm;
