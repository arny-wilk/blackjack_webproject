//@ts-check

import NavBarComponentBuilder from "./componentBuilder/navbarComponentBuilder.js";
import RulesComponentBuilder from "./componentBuilder/rulesComponentBuilder.js";
import BoardComponentBuilder from "./componentBuilder/boardComponentBuilder.js"
import DeckComponentBuilder from "./componentBuilder/deckComponentBuilder.js";

export default class ApplicationContext {

    #navBar
    #rules
    #board
    #deck

    constructor() {
        this.#navBar = NavBarComponentBuilder.prototype.buildNavBarComponent();
        this.#rules = RulesComponentBuilder.prototype.buildSectionRulesComponent();
        this.#deck = DeckComponentBuilder.prototype.buildDeckComponent();
        this.#board = BoardComponentBuilder.prototype.buildBoardComponent();
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

    getDeck() {
        return this.#deck;
    }

}