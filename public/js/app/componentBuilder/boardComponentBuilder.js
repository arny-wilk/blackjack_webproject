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


        board.createComponent("button", "Deal", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__deal"}]);
        board.createComponent("button", "Hit", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__hit"}]);
        board.createComponent("button", "Stand", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__stand"}]);
        board.createComponent("button", "restart", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__restart"}]);


        board.createComponent("button", "Test", document.querySelector(".board__panel"), [{"name": "type", "value": "button"}, {"name": "class", "value": "btn__board btn__test_game"}]);
        
        board.toggle(".computer__deck li:nth-last-child(1)", ".btn__test_game", "active_last_card");


        return board;
    }
}