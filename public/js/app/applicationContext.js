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
        
        Play.prototype.deal(this.#btnDeal, this.#deck, this.#cards, this.#computerHand, this.#playerHand);
        Play.prototype.testBtn(this.#board);
        
        while (true) {
            Play.prototype.hit(this.#btnHit, this.#deck, this.#cards, this.#computerHand, this.#playerHand);

            
            let {computerHandSum, playerHandSum} = Play.prototype.execRules(this.#computerHand, this.#playerHand);
            
            if(BlackJackRules.prototype.win(playerHandSum, computerHandSum)) {
                console.log(`its a win`);
                break;
            }
            if(BlackJackRules.prototype.loose(playerHandSum, computerHandSum)) {
                console.log(`its a loose`);
                break;
            }
            if(BlackJackRules.prototype.tie(playerHandSum, computerHandSum)) {
                console.log(`its a tie`);
                break;
            }
        }

        Play.prototype.reset(this.#btnReset, this.#deck, this.#cards, this.#computerHand, this.#playerHand);
        
        
    }

}