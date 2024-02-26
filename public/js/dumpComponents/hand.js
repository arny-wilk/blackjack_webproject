//@ts-check

/**
 *
 * @export
 * @class Hand
 * @typedef {Hand} Readable
 */
export default class Hand {

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
