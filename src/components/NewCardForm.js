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

  emojiOptions = () => {
    return (
      EMOJI_LIST.map((field) => {
        return (
          <option value={field}>
            {emoji.getUnicode(`${field}`)}
          </option>
        )
      })
    )
  }


  onInputChange = (event) => {
    const updatedState = {};
    
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

    if (this.state.text) {
      this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji,
      });

      this.setState({
        text: '',
        emoji: '',
      });
    }
  }

  render() {
    return (
      <div>
        <h3>New Card</h3>
        <form
          className=""
          onSubmit={this.onSubmitCard}
        >
          <div>
            <label className="">Text:</label>
            <input
              name="text"
              id="text"
              onChange={this.onInputChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label className="">Emoji:</label>
            <select
              name="emoji"
              id="emoji"
              onChange={this.onInputChange}
              value={this.state.emoji}
            >
              {this.emojiOptions()}
            </select>
          </div>
          <input
            className=""
            type="submit"
            name="submit"
            value="Add a Card"
            onClick={this.onSubmitHandler}
          />
        </form>
      </div>
    )
  }
}


export default NewCardForm