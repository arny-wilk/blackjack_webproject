//@ts-check

import Hand from "../dumpComponents/hand.js";

export default class BlackJackRules {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    /**
     *
     * @param {Hand} obj
     * @returns {string}
     */
    setLogsRules(obj) {
        const logs = ["J", "Q", "K"];
        for (let index = 0; index < logs.length; index++) {
            if (logs[index] === obj.value) {
                return "10"
            }
        }
        return obj.value.toString();
    }

    /**
     *
     * @param {Hand[]} hand
     * @returns {number}
     */
    handWithoutAce(hand) {
        const filteredArray = hand.filter((val) => val.value !== "A");
        let tempSum = 0;
        for (let ele of filteredArray) {
            tempSum += parseInt(ele.value.toString());
        }
        return tempSum;
    }

    /**
     *
     * @param {number} handSum
     * @returns {string}
     */
    aceRule(handSum) {
        if (handSum + 11 <= 21) {
            return "11";
        } else if (handSum == 10) {
            return "11";
        }
        return "1";
    }

    /**
     *
     * @param {number} playerHandSum
     * @param {number} computerHandSum
     * @returns {boolean}
     */
    loose(playerHandSum, computerHandSum) {
        return playerHandSum < computerHandSum;
    }

    /**
     *
     * @param {number} playerHandSum
     * @returns {boolean}
     */
    looseByJump(playerHandSum) {
        return playerHandSum > 21;
    }

    /**
     *
     * @param {number} computerHandSum
     * @returns {boolean}
     */
    looseByBlackJack(computerHandSum) {
        return computerHandSum === 21;
    }

    /**
     *
     * @param {number} playerHandSum
     * @returns {boolean}
     */
    winByBlackJack(playerHandSum) {
        return playerHandSum === 21;
    }

    /**
     *
     * @param {number} computerHandSum
     * @returns {boolean}
     */
    winByComputerJump(computerHandSum) {
        return computerHandSum > 21;
    }

    /**
     *
     * @param {number} playerHandSum
     * @param {number} computerHandSum
     * @returns {boolean}
     */
    win(playerHandSum, computerHandSum) {
        return playerHandSum > computerHandSum;
    }

    /**
     *
     * @param {number} playerHandSum
     * @param {number} computerHandSum
     * @returns {boolean}
     */
    tie(playerHandSum, computerHandSum) {
        return playerHandSum == computerHandSum;
    }

    /**
     *
     * @param {Hand[]}hand 
     * @returns {number}}
     */
    execRules(hand) {

        hand.forEach(obj => {
            obj.value
            obj.value = BlackJackRules.prototype.setLogsRules(obj)
            if (obj.value === "A") {
                obj.value = BlackJackRules.prototype.aceRule(BlackJackRules.prototype.handWithoutAce(hand));
            }
        });

        const handArrayValue = [];
        hand.forEach(obj => {
            handArrayValue.push(parseInt(obj.value.toString(), 10));
        })

        return handArrayValue.reduce((acc, curr) => acc + curr);

    }

}