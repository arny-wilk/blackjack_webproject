//@ts-check

import Board from "../dumpComponents/board.js";
import Card from "../dumpComponents/card.js";
import Hand from "../dumpComponents/hand.js";
import Notification from "../dumpComponents/notification.js";
import BlackJackRules from "../smartComponents/blackJackRules.js";
import Deck from "../smartComponents/deck.js";
import Dom from "../utilities/dom.js";
import StateContainer from "../utilities/stateContainer.js";
import Utils from "../utilities/utils.js";
import BoardComponentBuilder from "./componentBuilder/boardComponentBuilder.js";
import DeckComponentBuilder from "./componentBuilder/deckComponentBuilder.js";
import NotificationBuilder from "./componentBuilder/notificationBuilder.js";


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
     * @param {Notification} notification
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    deal(btnDeal, deck, cards, notification, computerHand, playerHand) {

        deck.add(".btn__hit", ".btn__deal", "active_btn")
        deck.add(".btn__stand", ".btn__deal", "active_btn")

        function proceedDeal() {
            DeckComponentBuilder.prototype.buildDeckComponent(deck, cards, computerHand, playerHand)
            const computerHandSum = BlackJackRules.prototype.execRules(computerHand);
            const playerHandSum = BlackJackRules.prototype.execRules(playerHand);

            if (BlackJackRules.prototype.winByBlackJack(playerHandSum)) {
                console.log(`its a blackjack you won`, playerHandSum);
                NotificationBuilder.prototype.buildBlackJackWinNotification(notification).show();
            }

            if (BlackJackRules.prototype.looseByBlackJack(computerHandSum)) {
                console.log(`its a blackjack you loose `, computerHandSum);
                NotificationBuilder.prototype.buildBlackJackLooseNotification(notification).show();
            }

            Board.prototype.destroyComponent(".computer__handsum_show");
            Board.prototype.destroyComponent(".player__handsum_show");
            Board.prototype.createComponent("span", ` ${playerHandSum}`, document.querySelector(".player_panel"), [{ "name": "class", "value": "player__handsum_show" }]);

        }
        btnDeal?.addEventListener('click', () => {
            NotificationBuilder.prototype.destroyNotification(notification);
            DeckComponentBuilder.prototype.destroyDeck(deck, cards, computerHand, playerHand);
            proceedDeal();
            this.closeDialog(notification);
        });
    };

    /**
     *
     * @param {*} btnHit
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Notification} notification
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    hit(btnHit, deck, cards, notification, computerHand, playerHand) {

        function proceedhit() {
            let card = cards.pop();
            if (card !== undefined) {
                playerHand.push(card);
            }
            const { suit, value } = playerHand[playerHand.length - 1];
            let li = deck.createComponent('li', null, document.querySelector(".player__deck"), [{ "name": "class", "value": "player__card_slot card_slot" }]);
            deck.createComponent("span", `${suit} ${value}`, li, [{}])
            deck.createComponent("span", `${suit}`, li, [{}])
            deck.createComponent("span", `${suit} ${value}`, li, [{}])

            const playerHandSum = BlackJackRules.prototype.execRules(playerHand);

            Board.prototype.updateComponent(".player__handsum_show", playerHandSum);

            if (BlackJackRules.prototype.looseByJump(playerHandSum)) {
                console.log(`You jumped its a loose :`, playerHandSum);
                NotificationBuilder.prototype.buildLooseNotification(notification).show();
            }

            if (BlackJackRules.prototype.winByBlackJack(playerHandSum)) {
                console.log(`BlackJack its a win :`, playerHandSum);
                NotificationBuilder.prototype.buildBlackJackWinNotification(notification).show();
            }
        }

        btnHit?.addEventListener('click', () => {
            NotificationBuilder.prototype.destroyNotification(notification);
            proceedhit();
            this.closeDialog(notification);
        });
    }

    /**
     *
     * @param {*} btnStand
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Notification} notification
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    stand(btnStand, deck, cards, notification, computerHand, playerHand) {

        function proceedStand() {
            while (true) {
                let computerHandSum = BlackJackRules.prototype.execRules(computerHand);
                let playerHandSum = BlackJackRules.prototype.execRules(playerHand);
                console.log(`computerHandSum: `, computerHandSum);
                console.log(`playerHandSum: `, playerHandSum);

                if (BlackJackRules.prototype.tie(playerHandSum, computerHandSum)) {
                    console.log(`computer don't add a card and its a tie:`, playerHandSum, computerHandSum);
                    NotificationBuilder.prototype.buildTieNotification(notification).show();
                    break;
                }

                if (BlackJackRules.prototype.loose(playerHandSum, computerHandSum)) {
                    console.log(`comp don't add a card and its a loose : `, playerHandSum + ' < ' + computerHandSum);
                    NotificationBuilder.prototype.buildLooseNotification(notification).show();
                    break;
                }

                let card = cards.pop();
                if (card !== undefined) {
                    computerHand.push(card);
                }
                const { suit, value } = computerHand[computerHand.length - 1];
                let li = deck.createComponent('li', null, document.querySelector(".computer__deck"), [{ "name": "class", "value": "computer__card_slot card_slot" }]);
                deck.createComponent("span", `${suit} ${value}`, li, [{}])
                deck.createComponent("span", `${suit}`, li, [{}])
                deck.createComponent("span", `${suit} ${value}`, li, [{}])

                computerHandSum = BlackJackRules.prototype.execRules(computerHand);
                playerHandSum = BlackJackRules.prototype.execRules(playerHand);

                Board.prototype.destroyComponent(".computer__handsum_show");
                Board.prototype.createComponent("span", ` ${computerHandSum}`, document.querySelector(".computer_panel"), [{ "name": "class", "value": "computer__handsum_show" }]);
                Board.prototype.updateComponent(".player__handsum_show", playerHandSum);

                console.log(`computerHandSum: `, computerHandSum);
                console.log(`playerHandSum: `, playerHandSum);

                if (BlackJackRules.prototype.looseByBlackJack(computerHandSum)) {
                    console.log(`BlackJack, its a loose`, computerHandSum);
                    NotificationBuilder.prototype.buildBlackJackLooseNotification(notification).show();
                    break;
                }

                if (BlackJackRules.prototype.winByComputerJump(computerHandSum)) {
                    console.log(`computer Jumped its a win`, computerHandSum);
                    NotificationBuilder.prototype.buildWinNotification(notification).show();
                    break;
                }

                if (BlackJackRules.prototype.tie(playerHandSum, computerHandSum)) {
                    console.log(`its a tie:`, playerHandSum, ' = ', computerHandSum);
                    NotificationBuilder.prototype.buildTieNotification(notification).show();
                    break;
                }

                if (!BlackJackRules.prototype.winByComputerJump(computerHandSum) && BlackJackRules.prototype.loose(playerHandSum, computerHandSum)) {
                    console.log(`its a loose`, playerHandSum + ' < ' + computerHandSum);
                    NotificationBuilder.prototype.buildLooseNotification(notification).show();
                    break;
                }
            }

        }
        btnStand?.addEventListener('click', () => {
            NotificationBuilder.prototype.destroyNotification(notification);
            proceedStand();
            this.closeDialog(notification);
        });
    }

    /**
     *
     * @param {Board} board
     */
    testBtn(board) {
        board.toggle(".computer__deck li:nth-last-child(1)", ".btn__test_game", "active_last_card");
    }


    /**
     * @param {Notification} notification
     */
    closeDialog(notification) {
        document.getElementById("dialog__notification")?.addEventListener("click", () => {
            NotificationBuilder.prototype.destroyNotification(notification);
        })
    }

    /**
     *
     * @param {*} btnReset
     * @param {Deck} deck
     * @param {Card[]} cards
     * @param {Notification} notification
     * @param {Hand[]} computerHand
     * @param {Hand[]} playerHand
     */
    reset(btnReset, deck, cards, notification, computerHand, playerHand) {

        function proceedReset() {
            DeckComponentBuilder.prototype.destroyDeck(deck, cards, computerHand, playerHand)
        }
        btnReset?.addEventListener('click', () => {
            NotificationBuilder.prototype.destroyNotification(notification);
            proceedReset();
        });
    }

}