//@ts-check

import NavBarComponentBuilder from "./componentBuilder/navbarComponentBuilder.js";
import RulesComponentBuilder from "./componentBuilder/rulesComponentBuilder.js";
import BoardComponentBuilder from "./componentBuilder/boardComponentBuilder.js"
import Play from "./play.js";

export default class ApplicationContext {

    #navBar
    #rules
    #board
    #btnDeal
    #btnReset

    constructor() {
        this.#navBar = NavBarComponentBuilder.prototype.buildNavBarComponent();
        this.#rules = RulesComponentBuilder.prototype.buildSectionRulesComponent();
        this.#board = BoardComponentBuilder.prototype.buildBoardComponent();
        this.#btnDeal = document.querySelector(".btn__deal");
        this.#btnReset = document.querySelector(".btn__reset");
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

    startDeal() {
        return Play.prototype.deal(this.#btnDeal);
    }

    resetDeal() {
        return Play.prototype.reset(this.#btnReset);
    }
}