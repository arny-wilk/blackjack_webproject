//@ts-check

import Board from "../dumpComponents/board.js";
import Card from "../dumpComponents/card.js";
import BlackJackRules from "../smartComponents/blackJackRules.js";
import Deck from "../smartComponents/deck.js";
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
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Object[]} computerHand
     * @param {Object[]} playerHand
     */
    deal(btnDeal, deck, cards, computerHand, playerHand) {

        function proceedDeal() {
            DeckComponentBuilder.prototype.destroyDeck(deck, cards, computerHand, playerHand);
            DeckComponentBuilder.prototype.buildDeckComponent(deck, cards, computerHand, playerHand)
            Play.prototype.execRules(computerHand, playerHand);
        }

        btnDeal?.addEventListener('click', proceedDeal);

        // return { deck: deck, cards: cards, computerHand: computerHand, playerHand: playerHand };

    };

    /**
     *
     * @param {Board} board
     */
    testBtn(board) {
        board.toggle(".computer__deck li:nth-last-child(1)", ".btn__test_game", "active_last_card");
    }

    /**
     *
     * @param {*} btnReset
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Object[]} computerHand
     * @param {Object[]} playerHand
     */
    reset(btnReset, deck, cards, computerHand, playerHand) {
        function proceedReset() {
            return DeckComponentBuilder.prototype.destroyDeck(deck, cards, computerHand, playerHand)
        }
        btnReset?.addEventListener('click', proceedReset);

        // return { cards: cards, computerHand: computerHand, playerHand: playerHand };
    }

    /**
     *
     * @param {*} btnHit
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Object[]} computerHand
     * @param {Object[]} playerHand
     */
    hit(btnHit, deck, cards, computerHand, playerHand) {
        function proceedhit() {
            playerHand.push(cards.pop());
            const { suit, value } = playerHand[playerHand.length - 1];
            deck.createComponent('li', `${suit}, ${value}`, document.querySelector(".player__deck"), [{ "name": "class", "value": "player__card_slot card_slot" }]);
            Play.prototype.execRules(computerHand, playerHand);
        }
        btnHit?.addEventListener('click', proceedhit);

        // return { deck: deck, cards: cards, computerHand: computerHand, playerHand: playerHand };
    }

    stand() { }

    /**
     *
     * @param {Object[]} computerHand
     * @param {Object[]} playerHand
     * @returns {*}
     */
    execRules(computerHand, playerHand) {

        computerHand.forEach(val => {
            val.value = BlackJackRules.prototype.setLogsRules(val.value)
            if (val.value === "A") {
                val.value = BlackJackRules.prototype.aceRule(BlackJackRules.prototype.handWithoutAce(computerHand));
            }
        });


        const computerHandArrayValue = [];
        computerHand.forEach(val => {
            computerHandArrayValue.push(parseInt(val.value, 10));
        })


        playerHand.forEach(val => {
            val.value = BlackJackRules.prototype.setLogsRules(val.value)
            if (val.value === "A") {
                val.value = BlackJackRules.prototype.aceRule(BlackJackRules.prototype.handWithoutAce(playerHand));
            }
        });

        const playerHandArrayValue = [];
        playerHand.forEach(val => {
            playerHandArrayValue.push(parseInt(val.value, 10));
        })

        console.log("array of cards values : ", computerHandArrayValue);
        console.log("array of cards values : ", playerHandArrayValue);

        let playerHandSum = 0;
        let computerHandSum = 0;

        if (playerHandArrayValue.length > 0 && computerHandArrayValue.length > 0) {
            playerHandArrayValue.reduce((acc, curr) => acc + curr, playerHandSum);
            computerHandArrayValue.reduce((acc, curr) => acc + curr, computerHandSum);
        }

        return { computerHandSum: computerHandSum, playerHandSum: playerHandSum }
    }

}