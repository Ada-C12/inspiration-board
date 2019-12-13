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
      <form onSubmit={this.onSubmitHandler}>
        <h3>Add a Card</h3>
        <div>
          <label htmlFor="text">Message: </label>
        </div>

        <div>
          <textarea
            name="text"
            id="text"
            onChange={this.onInputChange}
            value={this.state.text}
          >
            {this.state.text}
          </textarea>
        </div>

        <div>
          <label htmlFor="emoji">Emoji: </label>
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
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
