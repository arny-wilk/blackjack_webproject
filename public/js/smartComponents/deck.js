//@ts-check

import Card from "../dumpComponents/card.js";
import Dom from "../utilities/dom.js";


/**
 *
 * @export
 * @class Deck
 * @typedef {Deck} Readable
 * @extends {Dom}
 */
export default class Deck extends Dom {

    /**
     *
     * @type {string[]}
     */
    #SUIT = ["♣️", "♠️", "♦️", "♥️"];

    /**
     *
     * @type {string[]}
     */
    #VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    /**
     * @type {Card[]}
     */
    #cards;

    constructor() {
        super();
        this.#cards = this.freshDeck();
    }

    numberOfCards() {
        return this.#cards.length;
    }

    shuffle() {
        for (let i = this.numberOfCards() - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.#cards[newIndex];
            this.#cards[newIndex] = this.#cards[i];
            this.#cards[i] = oldValue;
        }
    }

    /**
     *
     * @returns {Card[]}
     */
    getCards() {
        return this.#cards;
    }

    /**
     *
     * @returns {Card[]}
     */
    freshDeck() {
        return this.#SUIT.flatMap((suit) => {
            return this.#VALUES.map((value) => {
                return new Card(suit, value);
            })
        })
    }
}
