//@ts-check

import BlackJackRules from "../smartComponents/blackJackRules.js";

export default class Play {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    deal() { }

    /**
     *
     * @param {Object[]} computerHand
     * @param {Object[]} playerHand
     */
    execution(computerHand, playerHand) {

        computerHand.forEach(val => {
            val.value = BlackJackRules.prototype.setLogsRules(val.value)
            if (val.value == "AS") {
                val.value = BlackJackRules.prototype.aceRule(BlackJackRules.prototype.handWithoutAce(computerHand));
            }
            return val;
        });


        const computerHandArrayValue = [];
        computerHand.forEach(val => {
            computerHandArrayValue.push(parseInt(val.value, 10));
        })

        console.log(`Computer Hand sum :`, computerHandArrayValue.reduce((acc, val) => acc + val));


        playerHand.forEach(val => {
            val.value = BlackJackRules.prototype.setLogsRules(val.value)
            if (val.value == "AS") {
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