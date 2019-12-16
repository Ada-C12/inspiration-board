import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const emojis = require("emoji-dictionary");
const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "", 
      emoji: ""
    };
  }

  onChange = (event) => {
    const { name, value } = event.target;
    
    const updatedState = {};
    updatedState[name] = value;

    this.setState(updatedState);
  };

  onSelect = event => {
    this.setState({
      emoji: event.target.value
    });
  };
  
  onSubmit = (e) => {
    e.preventDefault();

    let newSubmission = {}
    Object.keys(this.state).forEach((key) => {
      if ( key === 'Emoji' || key === "emoji" ) {
        const value = this.state[key]    
        newSubmission[key] = emoji.getName(value)
      } else {
        newSubmission[key] = this.state[key]
      }
    }); 

    this.props.addCard(newSubmission);

    this.setState({ 
      text: "", 
      emoji: "" 
    });
  }

  render() {
    const emojiList = EMOJI_LIST.map((emoji) => {
      return <option> {emojis.getUnicode(emoji)}</option>
    });

    return (
        <form className="new-card-form">
          <h1 className="new-card-form__header"> Create a new card! </h1>
          <div className="new-card-form__form">
            <input 
              className="new-card-form__form-textarea"
              type="text" 
              name="text" 
              placeholder="Text" 
              value={this.state.text}
              onChange={this.onChange}
            />
            < select
              className="new-card-form__form-select"
              value={this.state.emoji}
              onChange={this.onSelect}>
              {emojiList}
            </select>
            <input 
              className="new-card-form__form-button"
              type="submit" 
              value="Submit" 
              onClick={this.onSubmit} 
            />
          </div>
        </form> 
    )
  }
}

export default NewCardForm;
