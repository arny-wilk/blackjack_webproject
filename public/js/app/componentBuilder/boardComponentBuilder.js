//@ts-check

import Board from "../../dumpComponents/board.js";

export default class BoardComponentBuilder {
    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    buildBoardComponent() {
        const board = new Board();

        board.createComponent("h2", "computer hand", document.querySelector(".deck__container"), [{"name": "class", "value": "deck__computer_panel"}]);
        board.createComponent("h2", "player hand", document.querySelector(".deck__container"), [{"name": "class", "value": "deck__player_panel"}]);

        board.createComponent("button", "Deal", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__deal"}]);
        board.createComponent("button", "Hit", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__hit"}]);
        board.createComponent("button", "Stand", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__stand"}]);
        // board.createComponent("button", "restart", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__restart"}]);


        // board.createComponent("button", "Test", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__test_game"}]);
        board.createComponent("button", "Reset", document.querySelector(".board__panel"), [{"name": "type", "value": "reset"}, {"name": "class", "value": "btn__board btn__reset"}]);

        return board;
    }
}