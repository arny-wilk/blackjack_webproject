//@ts-check

import BlackJackRules from "../smartComponents/blackJackRules.js";
import DeckComponentBuilder from "./componentBuilder/deckComponentBuilder.js";

/**
 *
 * @export
 * @class Play
 * @typedef {Play} Readable
 */
export default class Play {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    /**
     *
     * @param {*} btnDeal
     * @returns {*}
     */
    deal(btnDeal) {
        // btnDeal?.addEventListener('click', () => {
        // });
        btnDeal?.addEventListener('click', () => {
            DeckComponentBuilder.prototype.initCards();
            DeckComponentBuilder.prototype.destroyDeck();
            DeckComponentBuilder.prototype.buildDeckComponent();
            console.log(`Event fired once, no more click will be handler`);
        });
    };

    /**
     *
     * @param {*} btnReset
     */
    reset(btnReset) {
        btnReset?.addEventListener('click', () => {
            DeckComponentBuilder.prototype.destroyDeck();
        });
    }

    /**
     *
     * @param {Object[]} computerHand
     * @param {Object[]} playerHand
     */
    execRules(computerHand, playerHand) {

        computerHand.forEach(val => {
            val.value = BlackJackRules.prototype.setLogsRules(val.value)
            if (val.value === "A") {
                val.value = BlackJackRules.prototype.aceRule(BlackJackRules.prototype.handWithoutAce(computerHand));
            }
            return val;
        });

        console.log(`Computer Hand: `, computerHand);


        const computerHandArrayValue = [];
        computerHand.forEach(val => {
            computerHandArrayValue.push(parseInt(val.value, 10));
        })

        console.log(`Computer Hand sum :`, computerHandArrayValue.reduce((acc, val) => acc + val));


        playerHand.forEach(val => {
            val.value = BlackJackRules.prototype.setLogsRules(val.value)
            if (val.value === "A") {
                val.value = BlackJackRules.prototype.aceRule(BlackJackRules.prototype.handWithoutAce(playerHand));
            }
            return val;
        });

        console.log(`Player Hand :`, playerHand);

        const playerHandArrayValue = [];
        playerHand.forEach(val => {
            playerHandArrayValue.push(parseInt(val.value, 10));
        })

        console.log(`Player Hand Sum :`, playerHandArrayValue.reduce((acc, val) => acc + val));

    }

    hit() { }

    stand() { }


}