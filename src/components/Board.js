import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import "./Board.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import CARD_DATA from "../data/card-data.json";

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {
          card: {
            id: 3681,
            text: "You rock!",
            emoji: "Rock"
          }
        },
        {
          card: {
            id: 3673,
            text: null,
            emoji: "dog"
          }
        },
        {
          card: {
            id: 3672,
            text: null,
            emoji: "clap"
          }
        },
        {
          card: {
            id: 3671,
            text: null,
            emoji: "clap"
          }
        },
        {
          card: {
            id: 3670,
            text: "You can do it!",
            emoji: null
          }
        },
        {
          card: {
            id: 3669,
            text: "We believe in you!",
            emoji: null
          }
        },
        {
          card: {
            id: 3668,
            text: "you are enough",
            emoji: null
          }
        },
        {
          card: {
            id: 3667,
            text: "It's ok to be in it for the money!  $$$",
            emoji: null
          }
        },
        {
          card: {
            id: 3666,
            text: "Be good to people for no reason",
            emoji: null
          }
        },
        {
          card: {
            id: 3665,
            text: "Make time for exercise!",
            emoji: null
          }
        },
        {
          card: {
            id: 3664,
            text: "TAKE A NAP",
            emoji: null
          }
        },
        {
          card: {
            id: 3663,
            text: "DON'T ISOLATE",
            emoji: null
          }
        },
        {
          card: {
            id: 3662,
            text: "This is just the beginning",
            emoji: null
          }
        },
        {
          card: {
            id: 3661,
            text: "Growth isn't linear",
            emoji: null
          }
        },
        {
          card: {
            id: 3660,
            text: "Look for the helpers",
            emoji: null
          }
        },
        {
          card: {
            id: 3659,
            text: "BREATHE",
            emoji: null
          }
        },
        {
          card: {
            id: 3658,
            text: "BE EXCELLENT TO EACHOTHER",
            emoji: null
          }
        },
        {
          card: {
            id: 3657,
            text: "100",
            emoji: null
          }
        }
      ]
    };
  }

  render() {
    const emoji = require("emoji-dictionary");
    return (
      <div>
        {this.state.cards.map(card => {
          if (card["card"]["emoji"]) {
            return (
              <div>
                <p>{card["card"]["text"]}</p>
                <p>{emoji.getUnicode(card["card"]["emoji"])}</p>
              </div>
            );
          } else {
            return (
              <div>
                <p>{card["card"]["text"]}</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;
