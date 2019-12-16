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

  onInputChange = (event) => {
    const updatedState = {};
    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  }

  addNewCard = (event) => {
    event.preventDefault();

    this.props.addCardCallBack(this.state);
    this.setState({
      text: "",
      emoji: "",
    })
  }

  render() {
    const emojis = EMOJI_LIST.map((symbol, i) => {
      return (
        <option
          key={i}
          value={symbol}
        >{emoji.getUnicode(symbol)}</option>
      );
    });

    return (
      <section className="new-card-form">
        <h3 className="new-card-form__header">Add new card</h3>
        <form onSubmit={this.addNewCard} className="new-card-form__form">
          <label className="new-card-form__form-label"> text </label>
          <textarea className="new-card-form__form-textarea"
            name="text"
            id="text"
            type="text"
            onChange={this.onInputChange}
            value={this.state.text}
          >
          </textarea>

          <label className="new-card-form__form-label"> Emoji </label>
          <select className="new-card-form__form-select"
            value={this.state.emoji}
            name="emoji"
            onChange={this.onInputChange}
            id="emoji">
            {emojis}
          </select>

          <input type="submit" value="Submit Line" className="new-card-form__form-button" />

        </form>

      </section>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallBack: PropTypes.func,
};
export default NewCardForm;