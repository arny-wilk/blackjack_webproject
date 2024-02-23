//@ts-check

import Card from "../../dumpComponents/card.js";
import Deck from "../../smartComponents/deck.js";
import Play from "../play.js";

export default class DeckComponentBuilder {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    buildDeckComponent() {

        /**
         *
         * @type {Deck}
         */
        const deck = new Deck();
        deck.shuffle();
        

        /**
         *
         * @type {Card[]}
         */
        const cards = deck.getCards();


        /**
         *
         * @type {Object[]}
         */
        const computerHand = [];

        /**
         *
         * @type {Object[]}
         */
        const playerHand = [];

        computerHand.push(cards.pop());
        playerHand.push(cards.pop());

        computerHand.push(cards.pop());
        playerHand.push(cards.pop());


        deck.createComponent("h2", "computer hand", document.querySelector(".deck__container"), [{"name": "class", "value": "deck__computer_title"}]);
        const computer = deck.createComponent("ul", null, document.querySelector(".deck__container"), [{ "name": "class", "value": "computer__deck deck" }]);
        for (let computerCard of computerHand) {
            const { suit, value } = computerCard;
            deck.createComponent("li", `${suit}, ${value}`, computer, [{ "name": "class", "value": "computer__card_slot card_slot" }]);
        }


        deck.createComponent("h2", "player hand", document.querySelector(".deck__container"), [{"name": "class", "value": "deck__player_title"}]);
        const player = deck.createComponent("ul", null, document.querySelector(".deck__container"), [{ "name": "class", "value": "player__deck deck" }]);
        for (let playerCard of playerHand) {
            const { suit, value } = playerCard;
            deck.createComponent("li", `${suit}, ${value}`, player, [{ "name": "class", "value": "player__card_slot card_slot" }]);
        }

        Play.prototype.execution(computerHand, playerHand);

        return deck;
    }
}