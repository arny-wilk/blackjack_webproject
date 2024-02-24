//@ts-check

import Card from "../../dumpComponents/card.js";
import Deck from "../../smartComponents/deck.js";
import Play from "../play.js";

/**
 *
 * @export
 * @class DeckComponentBuilder
 * @typedef {DeckComponentBuilder} Readable
 */
export default class DeckComponentBuilder {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    /**
     *
     * @returns {{ deck: Deck; cards: Card[]; computerHand: Object[]; playerHand: Object[]; }}
     */
    initCards() {

        const deck = new Deck();

        deck.shuffle();
        const cards = deck.getCards();
        const computerHand = [];
        const playerHand = [];

        return {
            deck: deck,
            cards: cards,
            computerHand: computerHand,
            playerHand: playerHand
        }

    }

    buildDeckComponent() {

        const { deck, cards, computerHand, playerHand } = this.initCards();


        computerHand.push(cards.pop());
        playerHand.push(cards.pop());

        computerHand.push(cards.pop());
        playerHand.push(cards.pop());


        const computer = deck.createComponent("ul", null, document.querySelector(".deck__computer_panel"), [{ "name": "class", "value": "computer__deck deck" }]);
        for (let computerCard of computerHand) {
            const { suit, value } = computerCard;
            deck.createComponent("li", `${suit}, ${value}`, computer, [{ "name": "class", "value": "computer__card_slot card_slot" }]);
        }


        const player = deck.createComponent("ul", null, document.querySelector(".deck__player_panel"), [{ "name": "class", "value": "player__deck deck" }]);
        for (let playerCard of playerHand) {
            const { suit, value } = playerCard;
            deck.createComponent("li", `${suit}, ${value}`, player, [{ "name": "class", "value": "player__card_slot card_slot" }]);
        }

        Play.prototype.execRules(computerHand, playerHand);

        return deck;
    }

    destroyDeck() {

        const { deck, computerHand, playerHand } = this.initCards();

        console.log(`test destroy deck here: `);
        if (deck !== undefined) {
            document.querySelector(".computer__deck")?.remove()
            document.querySelector(".player__deck")?.remove()
            document.querySelectorAll(".card_slot")?.forEach(item => item.remove());
        }

        if (computerHand.length > 0 && playerHand.length > 0) {
            computerHand.splice(computerHand.length - 1);
            playerHand.splice(playerHand.length - 1);
        }
    }


}