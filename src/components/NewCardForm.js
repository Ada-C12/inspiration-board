import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
        text: '', 
        emoji: '',
        onAddCardCallback: props.onAddCardCallback}
    };

  onTextChange = (event) => {
    const text = event.target.value
    this.setState({text})

  }

  onEmojiChange = (event) => {
    const emoji = event.target.value
    this.setState({emoji})
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
      this.state.onAddCardCallback({text: this.state.text,
        emoji: this.state.emoji,
      })
      this.setState({
        text: '', 
        emoji: ''})
    // }
  }

  emojiOptions = (options) => {
    options.map((option, i) =>
    {
      return (
        <option value={option}>{`${option}`}</option>
      )
    })
  }

  render() {
    return (
    <form className="new-card-form__header" onSubmit={this.onSubmitHandler}>
      
      <h3>Add a new card</h3>

      <div>
        <label className ="new-card-form__form-label"> Text: </label>
        <input name="text"
        id="text"
        onChange={this.onTextChange}
        value={this.state.text}/>
      </div>

      <div>
        <label className ="new-card-form__form-select"> Emoji: </label>
        <select name="emoji"
          id="emoji"
          onChange={this.onEmojiChange}
          value={this.state.emoji}
          data={this.emojiOptions(EMOJI_LIST)}
          >
        </select>
      </div>
        <button
          className="new-card-form__form-button" 
          type="submit"
          value="submit"
          onClick={this.onSubmitHandler}>Submit</button>
    </form>
    )
  }
}

export default NewCardForm;