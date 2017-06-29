import React, { Component } from 'react'
import PokerHand from './PokerHand'

import Deck from '../utilityClasses/Deck'
import Buttons from './Buttons'

var cards = new Deck()

class PokerTable extends Component{
	constructor(props) {
		super(props);
		this.state = {
			dealersHand: ['deck','deck'],
			playersHand: ['deck','deck'],
			communityCards: []
		}
		this.prepDeck = this.prepDeck.bind(this)
	}

	prepDeck(){
		cards.createDeck();
		cards.shuffleDeck();
	}

	render(){


		return(
			<div className="col-sm-12 the-table">
				{ /* <DealerHand /> */ }
				{ /* <PlayersHand /> */ }
				<PokerHand cards={this.state.dealersHand} /> { /* The computers hand */ }
				<PokerHand cards={this.state.communityCards} /> { /* Community Cards */ }
				<PokerHand cards={this.state.playersHand} /> { /* The players hand */ }
				<Buttons />
			</div>
		)
	}
}

export default PokerTable