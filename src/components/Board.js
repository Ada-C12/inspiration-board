import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  
  constructor(props) {
    super(props);  
    this.deleteCardHandler = this.deleteCardHandler.bind(this);
    this.state = {
      cards: [],
    };
  }
  
  deleteCardHandler(cardId) {
    axios.delete(this.props.url.concat("cards/",cardId))
      .then(res => {
        this.forceUpdate()
    
      });
    }
    componentDidMount(){
      axios.get(this.props.url.concat(this.props.boardName,"/cards"))
            .then(res => {
              const cards = res.data;
              this.setState({ cards});
            })
      }
  render() {
 

    return (
      <div className="board">
        {this.state.cards.map(card => {
          return (
            <Card onDelete={this.deleteCardHandler} id={card["card"]["id"]} text={card["card"]["text"]} emoji={card["card"]["emoji"]} />
          );
        })
        }
      </div>
    )
  }

}

export default Board;
