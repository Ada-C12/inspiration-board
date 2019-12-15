import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';


const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {

// set up statements, this will need state to keep track of the elements entered into the form

// this will have a render section that actually gathers those elements
//  The emoji list will be used as a drop-down menu to add something
// On submit, this form will be called back to...Board. 
// in prop types at the bottom, it should be expecting a callback function to App
  render() {
    return (
    <div>
      <p>I will be a new form one day </p>
      </div> 
    )
    
  }
}
export default NewCardForm;