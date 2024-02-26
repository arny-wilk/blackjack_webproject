//@ts-check

import Board from "../dumpComponents/board.js";
import Card from "../dumpComponents/card.js";
import Hand from "../dumpComponents/hand.js";
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
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    deal(btnDeal, deck, cards, computerHand, playerHand) {

        function proceedDeal() {
            // if (computerHand.length > 0 && playerHand.length > 0) {
            DeckComponentBuilder.prototype.destroyDeck(deck, cards, computerHand, playerHand);
            // }
            DeckComponentBuilder.prototype.buildDeckComponent(deck, cards, computerHand, playerHand)

            const { computerHandSum, playerHandSum } = BlackJackRules.prototype.execRules(computerHand, playerHand);

            if (BlackJackRules.prototype.winByBlackJack(playerHandSum)) {
                console.log(`its a BlackJack you won :`, playerHandSum);
            }

            if (BlackJackRules.prototype.looseByBlackJack(computerHandSum)) {
                console.log(`its a BlackJack you loose :`, playerHandSum);
            }

        }
        btnDeal?.addEventListener('click', proceedDeal);


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
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    reset(btnReset, deck, cards, computerHand, playerHand) {
        function proceedReset() {
            return DeckComponentBuilder.prototype.destroyDeck(deck, cards, computerHand, playerHand)
        }
        btnReset?.addEventListener('click', proceedReset);
    }

    /**
     *
     * @param {*} btnHit
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    hit(btnHit, deck, cards, computerHand, playerHand) {
        function proceedhit() {
            let card = cards.pop();
            if (card !== undefined) {
                playerHand.push(card);
            }
            const { suit, value } = playerHand[playerHand.length - 1];
            deck.createComponent('li', `${suit}, ${value}`, document.querySelector(".player__deck"), [{ "name": "class", "value": "player__card_slot card_slot" }]);

            const { computerHandSum, playerHandSum } = BlackJackRules.prototype.execRules(computerHand, playerHand);

            console.log(`computerHandSum `, computerHandSum);
            console.log(`playerHandSum `, playerHandSum);

            if (BlackJackRules.prototype.winByBlackJack(playerHandSum)) {
                console.log(`its a win :`, playerHandSum);
            }

            if (BlackJackRules.prototype.loose(playerHandSum, computerHandSum)) {
                console.log(`its a loose :`, playerHandSum);
            }

        }
        btnHit?.addEventListener('click', proceedhit);

    }

    /**
     *
     * @param {*} btnStand
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    stand(btnStand, deck, cards, computerHand, playerHand) {

        function proceedStand() {

            let { computerHandSum, playerHandSum } = BlackJackRules.prototype.execRules(computerHand, playerHand);

            console.log(`computerHandSum: `, computerHandSum);
            console.log(`playerHandSum: `, playerHandSum);

            while (true) {

                console.log(`hello do you work loop ?`);

                let card = cards.pop();
                if (card !== undefined) {
                    computerHand.push(card);
                }
                const { suit, value } = computerHand[computerHand.length - 1];
                deck.createComponent('li', `${suit}, ${value}`, document.querySelector(".computer__deck"), [{ "name": "class", "value": "computer__card_slot card_slot" }]);

                if (BlackJackRules.prototype.tie(playerHandSum, computerHandSum)) {
                    console.log(`its a tie:`, playerHandSum, computerHandSum);
                    break;
                }

                if (BlackJackRules.prototype.loose(playerHandSum, computerHandSum)) {
                    console.log(`its a loose :`, playerHandSum);
                    break;
                }


                if (BlackJackRules.prototype.win(playerHandSum, computerHandSum)) {
                    console.log(`its a win :`, playerHandSum);
                    break
                }

            }

        }

        btnStand?.addEventListener('click', proceedStand);

    }

}