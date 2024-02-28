//@ts-check

import Hand from "../dumpComponents/hand.js";
import Deck from "../smartComponents/deck.js";
import BoardComponentBuilder from "./componentBuilder/boardComponentBuilder.js";
import NavBarComponentBuilder from "./componentBuilder/navbarComponentBuilder.js";
import RulesComponentBuilder from "./componentBuilder/rulesComponentBuilder.js";
import Play from "./play.js";

export default class ApplicationContext {

    #navBar
    #rules
    #board
    #btnDeal
    #btnReset
    #btnHit
    #btnStand

    /**
     *
     * @type {Deck} deck
     */
    #deck

    #cards

    /**
     *
     * @type {Hand[]} computerHand
     */
    #computerHand;

    /**
     *
     * @type {Hand[]} playerHand
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
        this.#btnStand = document.querySelector(".btn__stand");
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


        Play.prototype.stand(this.#btnStand, this.#deck, this.#cards, this.#computerHand, this.#playerHand);

    }

    resetGame() {
        Play.prototype.reset(this.#btnReset, this.#deck, this.#cards, this.#computerHand, this.#playerHand);
    }

}