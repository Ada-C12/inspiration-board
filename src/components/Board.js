import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';    I did NOT use this hard coded .json

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currBoard: this.props.boardName,
      boardURL: this.props.URL + this.props.boardName  + "/cards",
      error: "",
      cards: [],
    };
  }

  getAndSaveAllCards = (endpointURL) => {
    axios.get(endpointURL)
    .then((response) => {
      const allCards = response.data.map( (hash) => {
        return (hash.card);
      });
      this.setState({ cards: allCards });      
    })
    .catch((error) => {
      this.setState({ error: `Oh hell no!  ${error.message}`});
    })
  }

  componentDidMount() {
    this.getAndSaveAllCards(this.state.boardURL);
  }

  showCards = () => {
    console.log("generating <Card> components for this.state.cards", this.state.cards);

    //has there been a change to boardName?
    if (this.state.currBoard !== this.props.boardName) {
      console.log(`Board selection changed! UPDATE!`);
      const updatedBoardURL = this.props.URL + this.props.boardName + "/cards";

      this.setState({
        currBoard: this.props.boardName,
        boardURL: updatedBoardURL,
      })

      this.getAndSaveAllCards(updatedBoardURL);
    }

    return (this.state.cards.map((card, i) => {
      return(<Card key={i} id={card.id} text={card.text} emoji={card.emoji} baseURL={this.props.baseURL} deleteCardCallback={this.deleteCard}/>);
    }));
  }

  deleteCard = (id) => {
    // console.log(`Board received: Delete triggered in <Card> for id ${id}`);
    const endpoint = (this.props.baseURL + "/cards/" + id); 
    
    axios.delete( endpoint )
    .then((response) => {
      let updatedCards = [...this.state.cards].filter(card => {
        return card.id !== parseInt(id);
      })
      this.setState({ cards: updatedCards });
    })
    .catch(error => {
      this.setState({ error: `Card deletion failed: ${error.message}`});
    });

  }

  addNewCard = (text, emoji) => {
    // console.log("ADD NEW CARD with params: text=", text, "& emoji=", emoji);

    axios.post(this.state.boardURL + `?text=${text}&emoji=${emoji}`)
    .then(response => {
      const updatedCards = [...this.state.cards];
      updatedCards.unshift(response.data.card);
      this.setState({ cards: updatedCards });
    })
    .catch(error => {
      this.setState({ error: `Adding new card failed b/c ${error.message}.`})
    });
    
  }

  render() {
    return (
      <div>
        { this.state.error ? <h1>{this.state.error}</h1>: null}
        
        <section className="cards__container">
          {this.showCards()}
        </section>

        <NewCardForm baseURL={this.props.baseURL} newCardCallback={this.addNewCard}/>

      </div>
    )
  }

}

Board.propTypes = {
  URL: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};

export default Board;
