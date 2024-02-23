//@ts-check

export default class BlackJackRules {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    /**
     *
     * @param {string} value
     * @returns {string}
     */
    setLogsRules(value) {
        const logs = ["J", "Q", "K"];
        if (logs.includes(value)) {
            return "10";
        }
        return value;
    }

    /**
     *
     * @param {Object[]} hand
     * @returns {number}
     */
    handWithoutAce(hand) {
        const filteredArray = hand.filter((val) => val.value !== "AS");
        let tempSum = 0;
        for (let ele of filteredArray) {
            ele.value = parseInt(ele.value);
            tempSum += ele.value;
        }
        return tempSum;
    }

    /**
     *
     * @param {number} handSum
     * @returns {*}
     */
    aceRule(handSum) {
        if (handSum + 11 < 21) {
            return "11";
        } else if (handSum + 11 > 21) {
            return "1";
        }
    }

    /**
     *
     * @param {number} playerHandSum
     * @param {number} computerHandSum
     * @returns {boolean}
     */
    loose(playerHandSum, computerHandSum) {
        return playerHandSum < computerHandSum || playerHandSum > 21 || computerHandSum <= 21;
    }

    /**
     *
     * @param {number} playerHandSum
     * @param {number} computerHandSum
     * @returns {boolean}
     */
    win(playerHandSum, computerHandSum) {
        return playerHandSum > computerHandSum || playerHandSum <= 21 && computerHandSum > 21;
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

}