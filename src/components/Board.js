import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// class Board extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cards: [],
//       error: '',
//     };
//   }

//   componentDidMount() {
//     axios.get(`https://inspiration-board.herokuapp.com/boards/${this.props.boardName}/cards`)
//     .then((response) => {
//       const allCards = response.data.map((object) => {
//         return object.card
//       })
//       this.setState({ cards: allCards });
//     })
//   .catch((error) => {
//     this.setState({ error: error.message });
//   });
//   }

//   deleteCard = (cardId) => {
//     axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
//     .then(() => {
//       const cardList = this.state.cards.filter((card) => card.id !== cardId);
//       this.setState({ cards: cardList });
//     })
//     .catch((error) => {
//       this.setState({ error: error.message });
//     });
//   };

//   addCard = (card) => {
//     axios.post('https://inspiration=board.herokuapp.com/boards/${this.props.boardName}/cards', card)
//     .then((response) => {
//       const updatedCards = this.state.cards;
//       console.log(response.data)
//       updatedCards.push(response.data.card);
//       this.setState({
//         cards:updatedCards,
//         error: ''
//       });
//     })
//     .catch((error) => {
//       this.setState({ error: error.message });
//     });
//   };

//   cardItems = () => {
//     return this.state.cards.map((card, i) => {
//       return (
//         <Card
//         key={i}
//         deleteCardCallbackAction={this.deleteCard}
//         {...card}
//       />
//       )
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.error}</h1>
//         <section className="board">{this.cardItems()}
//         </section>
//         <NewCardForm addCardCallbackAction={this.addCard}/>
//         Board
//       </div>
//     )
//   }

// }

// Board.propTypes = {
//   url: PropTypes.string.isRequired,
//   boardName: PropTypes.string.isRequired,
// };

// export default Board;


class Board extends Component {	
constructor(props) {
 super(props);


    this.state = {
      cards: [],
      error: '',
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}/${this.props.boardName}/cards`)
      .then((response) => {

        this.setState({
          cards: response.data
        });
      })
      .catch((error) => {
        this.setState({error: error.message});
      })

  }

  makeCollection () {
    const cardCollection = this.state.cards.map((card, i) => {
      return <Card 
      cardText={card.card.text}
      cardEmoji={card.card.emoji}
      id={card.card.id}
      key={i}
      deleteCardCallback={this.deleteCard}
      />
    });
    return cardCollection
  }

  deleteCard = (cardId) => {
    axios.delete(`https://inspiration-board.herokuapp.com/cards/${cardId}`)
    .then((response) => {
      const cards = this.state.cards.filter((card) => card.card.id !== cardId);
      console.log(cards)

      this.setState({
        cards,
        fullList: cards
      });
      console.log(this.state.cards)
    })
    .catch((error) => {
      this.setState({error: error.message});
    });
  }

  addCard = (card) => {
    axios.post(`${this.props.url}/${this.props.boardName}/cards`, card)
    .then((response) =>{
      const updatedData = this.state.cards;
      updatedData.push(response.data);

      this.setState({
        cards: updatedData,
        error: ''
      });
    })
    .catch((error) => {
      this.setState({error: error.message})
    })
  }



  render() {
    return (
      <div>
        	        
        <section className='board'>
          {this.makeCollection()}
         </section>
         <section className='new-card-form '>
           <NewCardForm addCardCallback={this.addCard}/>
         </section>
      </div>	 
    )
  }	  
}	


Board.propTypes = {

  url: PropTypes.string.isRequired,
  boardName: PropTypes.string.isRequired,
};


export default Board;
