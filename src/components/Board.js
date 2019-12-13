import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';


class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      error: '',
    };
  }

  addCard = (card) => {
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, card)
      .then((response) => {
        const updatedData = this.state.cards;
        updatedData.push(response.data.card);
        this.setState({
          cards: updatedData,
          error: ''
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  deleteCard = (id) => {
    axios.delete(`${this.props.url}/cards/${id}`)
      .then((response) => {
        console.log(`deleted ${id}`);
        //find card deleted and remove from state 
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  componentDidMount() {
    console.log('hi');
  axios.get(`${this.props.url}/boards/${this.props.boardName}/cards`)
  .then((response) => {
    
    let cardsFromApi = response.data.map((cardData) => {
      return cardData.card;   
    })

    this.setState({ 
      cards: cardsFromApi,
      error: '' 
    });
  })
  .catch((error) => {
    this.setState({ error: error.message });
  });
}

  render() {
    return (
      <div className="board">
        <NewCardForm addCardCallback={this.addCard}/>

        {this.state.cards.map((card) => {
          return(
            <Card 
              text={(card.text) ? card.text : ""}
              emoji={(card.emoji) ? card.emoji : ""}
              id={card.id}
              deleteCardCallback={this.deleteCard}
            />
          );
        })
        }
      </div>
    );
  }
}

// Board.propTypes = {
  
// };

export default Board;
