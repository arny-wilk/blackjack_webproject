//@ts-check

/**
 *
 * @export
 * @class Card
 * @typedef {Card} Readable
 */
export default class Card {

    /**
     *
     * @constructor
     * @param {string | string[]} suit
     * @param {string | string[]} value
     */
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

}
