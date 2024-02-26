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
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Object[]} computerHand
     * @param {Object[]} playerHand
     */
    buildDeckComponent(deck, cards, computerHand, playerHand) {

        computerHand.push(cards.pop());
        playerHand.push(cards.pop());

        computerHand.push(cards.pop());
        playerHand.push(cards.pop());


        for (let computerCard of computerHand) {
            const { suit, value } = computerCard;
            setTimeout(() => {
                deck.createComponent("li", `${suit}, ${value}`, document.querySelector(".computer__deck"), [{ "name": "class", "value": "computer__card_slot card_slot" }]);
            }, 1000);
        }


        for (let playerCard of playerHand) {
            const { suit, value } = playerCard;
            setTimeout(() => {
                deck.createComponent("li", `${suit}, ${value}`, document.querySelector(".player__deck"), [{ "name": "class", "value": "player__card_slot card_slot" }]);
            }, 1000);
        }


        return { deck: deck, cards: cards, computerHand: computerHand, playerHand: playerHand };

    }

    hitAction() {
    }

    standAction() {
    }


    /**
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Object[]} computerHand
     * @param {Object[]} playerHand
     */
    destroyDeck(deck, cards, computerHand, playerHand) {
        
        while (computerHand.length > 0 && playerHand.length > 0) {
            cards.push(computerHand.pop());
            cards.push(playerHand.pop());
        }
        
        while(document.querySelectorAll(".card_slot").length > 0) {
            deck.destroyComponent(".computer__card_slot");
            deck.destroyComponent(".player__card_slot");
        }
        // document.querySelector(".computer__deck")?.remove()
        // document.querySelector(".player__deck")?.remove()



        return { cards: cards, computerHand: computerHand, playerHand: playerHand };
    }

}