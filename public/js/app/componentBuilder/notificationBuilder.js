import Notification from "../../dumpComponents/notification.js";

export default class NotificationBuilder {
    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    /**
     * Description placeholder
     * @date 2/29/2024 - 4:23:30 PM
     *
     * @param {string} result
     * return {HTMLDialogElement}
     */
    buildNotification(result) {
        const notification = new Notification();
        const dialog = notification.createComponent("dialog", null, document.querySelector(".notification__panel"), [{ "name": "id", "value": "dialog__notification" }]);
        // notification.createComponent("p", )
        switch (result) {
            case "W":
                notification.createComponent("p", this.winMessage(), dialog, [{"name": "class", "value": "win__notification"}]);
                break;
            case "BJW":
                notification.createComponent("p", this.winByBlackJackMessage(), dialog, [{"name": "class", "value": "blackjack__win_notification"}]);
                break;
            case "L":
                notification.createComponent("p", this.looseMessage(), dialog, [{"name": "class", "value": "loose__notification"}]);
                break;
            case "BJL":
                notification.createComponent("p", this.looseByBlackJackMessage(), dialog, [{"name": "class", "value": "blackjack__loose_notification"}]);
                break;
            case "T":
                notification.createComponent("p", this.tieMessage(), dialog, [{"name": "class", "value": "tie__notification"}]);
            default:
                break;
        }
        const form = notification.createComponent("form", null, dialog, [{"name": "method", "value": "dialog"}, {"name": "id", "value": "dialog__box_notification"}]);
        notification.createComponent("button", "Restart", form, [{"name": "type", "value": "reset"}, {"name": "class", "value": "btn__board btn__reset"}]);
        // the button is the one created in BoardComponentBuilder restart button

        return dialog;
    }

    winMessage() {
        return "You won Congrats !";
    }

    winByBlackJackMessage() {
        return "It's a blackjack you won Congrats !";
    }

    looseMessage() {
        return "You loose sorry!";
    }

    looseByBlackJackMessage() {
        return "It's a blackjack you loose sorry!";
    }

    tieMessage() {
        return "its a tie";
    }

}