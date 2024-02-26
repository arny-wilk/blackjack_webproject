//@ts-check

import NavBarComponentBuilder from "./componentBuilder/navbarComponentBuilder.js";
import RulesComponentBuilder from "./componentBuilder/rulesComponentBuilder.js";
import BoardComponentBuilder from "./componentBuilder/boardComponentBuilder.js"
import Play from "./play.js";
import Deck from "../smartComponents/deck.js";
import Card from "../dumpComponents/card.js";
import BlackJackRules from "../smartComponents/blackJackRules.js";

export default class ApplicationContext {

    #navBar
    #rules
    #board
    #btnDeal
    #btnReset
    #btnHit

    /**
     *
     * @type {Deck} deck
     */
    #deck

    #cards

    /**
     *
     * @type {Object[]} computerHand
     */
    #computerHand;

    /**
     *
     * @type {Object[]} playerHand
     */
    #playerHand;


    constructor() {
        this.#navBar = NavBarComponentBuilder.prototype.buildNavBarComponent();
        this.#rules = RulesComponentBuilder.prototype.buildSectionRulesComponent();
        this.#board = BoardComponentBuilder.prototype.buildBoardComponent();
        this.#deck = new Deck;
        this.#cards = this.#deck.getCards();
        this.#computerHand = [];
        this.#playerHand = [];
        this.#btnDeal = document.querySelector(".btn__deal");
        this.#btnReset = document.querySelector(".btn__reset");
        this.#btnHit = document.querySelector(".btn__hit");
    }

    getNavBar() {
        return this.#navBar;
    }

    getRules() {
        return this.#rules;
    }

    getBoard() {
        return this.#board;
    }

    startGame() {

        Play.prototype.testBtn(this.#board);

        Play.prototype.deal(this.#btnDeal, this.#deck, this.#cards, this.#computerHand, this.#playerHand);
        Play.prototype.hit(this.#btnHit, this.#deck, this.#cards, this.#computerHand, this.#playerHand);

    }

    resetGame() {
        Play.prototype.reset(this.#btnReset, this.#deck, this.#cards, this.#computerHand, this.#playerHand);
    }

}