//@ts-check

import Card from "../../dumpComponents/card.js";
import Hand from "../../dumpComponents/hand.js";
import Deck from "../../smartComponents/deck.js";

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
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    buildDeckComponent(deck, cards, computerHand, playerHand) {

        let cardCompFirst = cards.pop();
        if (cardCompFirst !== undefined) {
            computerHand.push(cardCompFirst);
        }

        let cardCompSecond = cards.pop();
        if (cardCompSecond !== undefined) {
            computerHand.push(cardCompSecond);
        }

        let cardPlayerFirst = cards.pop();
        if (cardPlayerFirst !== undefined) {
            playerHand.push(cardPlayerFirst);
        }

        let cardPlayerSecond = cards.pop();
        if (cardPlayerSecond !== undefined) {
            playerHand.push(cardPlayerSecond);
        }

        console.log(`Hand computer: `, computerHand);
        console.log(`hand Player: `, playerHand);

        for (let computerCard of computerHand) {
            const { suit, value } = computerCard;
            let li = deck.createComponent("li", null, document.querySelector(".computer__deck"), [{ "name": "class", "value": "computer__card_slot card_slot" }]);
            deck.createComponent("span", `${suit} ${value}`, li, [{}])
            deck.createComponent("span", `${suit}`, li, [{}])
            deck.createComponent("span", `${suit} ${value}`, li, [{}])
        }

        deck.toggle(".computer__deck li:nth-child(2)", ".btn__stand", "active_last_card");

        for (let playerCard of playerHand) {
            const { suit, value } = playerCard;
            let li = deck.createComponent("li", null, document.querySelector(".player__deck"), [{ "name": "class", "value": "player__card_slot card_slot" }]);
            deck.createComponent("span", `${suit} ${value}`, li, [{}])
            deck.createComponent("span", `${suit}`, li, [{}])
            deck.createComponent("span", `${suit} ${value}`, li, [{}])
        }

    }

    /**
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    destroyDeck(deck, cards, computerHand, playerHand) {

        while (computerHand.length > 0) {
            let cardComp = computerHand.pop();
            if (cardComp !== undefined) {
                cards.push(cardComp);
            }
        }

        while (playerHand.length > 0) {
            let cardPlayer = playerHand.pop();
            if (cardPlayer !== undefined) {
                cards.push(cardPlayer);
            }
        }

        while (document.querySelectorAll(".computer__card_slot").length > 0) {
            deck.destroyComponent(".computer__card_slot");
        }

        while (document.querySelectorAll(".player__card_slot").length > 0) {
            deck.destroyComponent(".player__card_slot");
        }

        deck.shuffle();

    }

}