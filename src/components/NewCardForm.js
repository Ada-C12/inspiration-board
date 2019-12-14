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

    console.log(event);

      this.props.addCardCallback(this.state)

      this.setState({
        text: '',
        emoji: '',
      });
    }

  render () {
    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Add a Card</h3>
      <form className="new-card-form__form " onSubmit={this.onSubmitHandler}>

        <div>
          <label className="new-card-form__form-label" htmlFor="text">Message: </label>
        </div>

        <div>
          <textarea className=""
            name="text"
            id="text"
            onChange={this.onInputChange}
            value={this.state.text}
          >
            {this.state.text}
          </textarea>
        </div>

        <div>
          <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
          <input
            name="emoji"
            id="emoji"
            onChange={this.onInputChange}
            value={this.state.emoji}
          />
        </div>
        <input
          className="btn btn-success"
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
