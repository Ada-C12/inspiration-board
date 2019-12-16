import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

// Note: Because of the API's validations, you can't use my added emojis as standalones without text
const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "fish", "dancer", "sparkles", "avocado", "pie", "tada", "clinking_glasses", "cherry_blossom", "sunflower", "woman_cartwheeling", "turtle", "sweat_smile", "star_struck", "relaxed"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    };
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

    this.props.addCardCallback({
      text: this.state.text,
      emoji: this.state.emoji,
    });

    this.setState({
      text: '',
      emoji: '',
    });
  }

  emojiOptions = () => {
    return EMOJI_LIST.map((currentEmoji, i) => {
      return <option key={i} value={`${currentEmoji}`}>{emoji.getUnicode(currentEmoji)}</option>
    });
  }

  render () {
    return (
      <form className='new-card-form' onSubmit={this.onSubmitHandler}>
        <h3 className='new-card-form__header'>Add a Card</h3>
        <div className='new-card-form__form'>
          <label className='new-card-form__form-label' htmlFor="text">Text: </label>
          <input
            className='new-card-form__form-textarea'
            name='text'
            id='text'
            onChange={this.onInputChange}
            value={this.state.text}
          />
          <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
          <select
            className='new-card-form__form-select'
            name='emoji'
            id='emoji'
            onChange={this.onInputChange}
            value={this.state.emoji}
          >
            {this.emojiOptions()}
          </select>
          <input
            className="new-card-form__form-button"
            type="submit"
            name="submit"
            value="Add a Card"
            onClick={this.onSubmitHandler}
          />
        </div>
      </form>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
