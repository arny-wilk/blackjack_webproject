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

        board.createComponent("h3", "computer hand ", document.querySelector(".deck__container"), [{ "name": "class", "value": "computer_panel" }]);
        board.createComponent("ul", null, document.querySelector(".deck__container"), [{ "name": "class", "value": "computer__deck deck" }]);
        
        board.createComponent("h3", "player hand ", document.querySelector(".deck__container"), [{ "name": "class", "value": "player_panel" }]);
        board.createComponent("ul", null, document.querySelector(".deck__container"), [{ "name": "class", "value": "player__deck deck" }]);

        board.createComponent("button", "Deal", document.querySelector(".board__panel"), [{ "name": "type", "value": "button" }, { "name": "class", "value": "btn__board btn__deal" }]);
        board.createComponent("button", "Hit", document.querySelector(".board__panel"), [{ "name": "type", "value": "button" }, { "name": "class", "value": "btn__board btn__hit" }]);
        board.createComponent("button", "Stand", document.querySelector(".board__panel"), [{ "name": "type", "value": "button" }, { "name": "class", "value": "btn__board btn__stand" }]);
        board.createComponent("button", "restart", document.querySelector(".board__panel"), [{ "name": "type", "value": "button" }, { "name": "class", "value": "btn__board btn__reset" }]);
        // board.createComponent("button", "Test", document.querySelector(".board__panel"), [{ "name": "type", "value": "button" }, { "name": "class", "value": "btn__board btn__test_game" }]);


        return board;
    }


}