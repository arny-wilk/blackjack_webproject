//@ts-check

import Board from "../dumpComponents/board.js";
import Card from "../dumpComponents/card.js";
import Hand from "../dumpComponents/hand.js";
import Notification from "../dumpComponents/notification.js";
import BlackJackRules from "../smartComponents/blackJackRules.js";
import Deck from "../smartComponents/deck.js";
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
            NotificationBuilder.prototype.destroyNotification(notification);
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

            // const computerHandSum = BlackJackRules.prototype.execRules(computerHand);
            const playerHandSum = BlackJackRules.prototype.execRules(playerHand);

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

                let sumComp = BlackJackRules.prototype.execRules(computerHand);
                let sumPlayer = BlackJackRules.prototype.execRules(playerHand);
                console.log(`computerHandSum: `, sumComp);
                console.log(`playerHandSum: `, sumPlayer);

                if (BlackJackRules.prototype.tie(sumPlayer, sumComp)) {
                    console.log(`computer don't add a card and its a tie:`, sumPlayer, sumComp);
                    NotificationBuilder.prototype.buildTieNotification(notification).show();
                    break;
                }

                if (BlackJackRules.prototype.loose(sumPlayer, sumComp)) {
                    console.log(`comp don't add a card and its a loose : `, sumPlayer + ' < ' + sumComp);
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

                sumComp = BlackJackRules.prototype.execRules(computerHand);
                sumPlayer = BlackJackRules.prototype.execRules(playerHand);

                console.log(`computerHandSum: `, sumComp);
                console.log(`playerHandSum: `, sumPlayer);

                if (BlackJackRules.prototype.looseByBlackJack(sumComp)) {
                    console.log(`BlackJack, its a loose`, sumComp);
                    NotificationBuilder.prototype.buildBlackJackLooseNotification(notification).show();
                    break;
                }

                if (BlackJackRules.prototype.winByComputerJump(sumComp)) {
                    console.log(`computer Jumped its a win`, sumComp);
                    NotificationBuilder.prototype.buildWinNotification(notification).show();
                    break;
                }

                if (BlackJackRules.prototype.tie(sumPlayer, sumComp)) {
                    console.log(`its a tie:`, sumPlayer, ' = ', sumComp);
                    NotificationBuilder.prototype.buildTieNotification(notification).show();
                    break;
                }

                if (!BlackJackRules.prototype.winByComputerJump(sumComp) && BlackJackRules.prototype.loose(sumPlayer, sumComp)) {
                    console.log(`its a loose`, sumPlayer + ' < ' + sumComp);
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