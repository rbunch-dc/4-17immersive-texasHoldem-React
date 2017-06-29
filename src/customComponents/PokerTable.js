import React, { Component } from 'react'
import PokerHand from './PokerHand'

import Deck from '../utilityClasses/Deck'

var cards = new Deck()

class PokerTable extends Component{

	prepDeck(){
		cards.createDeck();
		cards.shuffleDeck();
	}

	render(){
		this.prepDeck()
		console.log(cards.deck)

		return(
			<div className="col-sm-12 the-table">
				{ /* <DealerHand /> */ }
				{ /* <PlayersHand /> */ }
				<PokerHand /> { /* The computers hand */ }
				<PokerHand /> { /* Community Cards */ }
				<PokerHand /> { /* The players hand */ }
			</div>
		)
	}
}

export default PokerTable