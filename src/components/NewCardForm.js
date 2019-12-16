import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";
import "./NewCardForm.css";

const EMOJI_LIST = [
  "",
  "heart_eyes",
  "beer",
  "clap",
  "sparkling_heart",
  "heart_eyes_cat",
  "dog"
];

class NewCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      emoji: ""
    };
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value });
  };

  handleEmojiChange = event => {
    this.setState({ emoji: event.target.value });
  };
  render() {
    return (
      <div>
        <h1 className="new-card-form__header">{this.props.text}</h1>
        <form className="new-card-form__form">
          <input
            className="new-card-form__form-textarea"
            placeholder="Text"
            type="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <select>
            {EMOJI_LIST.map(v => {
              return <option value="{v}">{emoji.getUnicode(v)}</option>;
            })}
          </select>

          <button
            className="new-card-form__form-button"
            onClick={() => {
              this.props.createNewCard(this.state.text, this.state.emoji);
            }}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default NewCardForm;
