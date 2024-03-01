import Notification from "../../dumpComponents/notification.js";

export default class NotificationBuilder {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    /**
     * DRY problem here 
     *
     * @type {Notification} notification
     */
    buildWinNotification(notification) {
        const dialog = notification.createComponent("dialog", null, document.querySelector(".notification__panel"), [{ "name": "id", "value": "dialog__notification" }]);
        notification.createComponent("p", "its a win !", dialog, [{ "name": "class", "value": "win__message" }]);
        notification.createComponent("form", null, dialog, [{ "name": "method", "value": "dialog" }, { "name": "class", "value": "dialog__box_notification" }]);
        return dialog;
    }

    /**
     *
     * @param {Notification} notification
     */
    buildLooseNotification(notification) {
        const dialog = notification.createComponent("dialog", null, document.querySelector(".notification__panel"), [{ "name": "id", "value": "dialog__notification" }]);
        notification.createComponent("p", "its a loose", dialog, [{ "name": "class", "value": "loose__message" }]);
        notification.createComponent("form", null, dialog, [{ "name": "method", "value": "dialog" }, { "name": "class", "value": "dialog__box_notification" }]);
        return dialog;
    }

    /**
     * @param {Notification} notification
     */
    buildBlackJackWinNotification(notification) {
        const dialog = notification.createComponent("dialog", null, document.querySelector(".notification__panel"), [{ "name": "id", "value": "dialog__notification" }]);
        notification.createComponent("p", "It's a blackjack you won Congrats !", dialog, [{ "name": "class", "value": "blackjack__win_message" }]);
        notification.createComponent("form", null, dialog, [{ "name": "method", "value": "dialog" }, { "name": "class", "value": "dialog__box_notification" }]);
        return dialog;
    }

    /**
     *
     * @param {Notification} notification
     */
    buildBlackJackLooseNotification(notification) {
        const dialog = notification.createComponent("dialog", null, document.querySelector(".notification__panel"), [{ "name": "id", "value": "dialog__notification" }]);
        notification.createComponent("p", "It's a blackjack you lost sorry", dialog, [{ "name": "class", "value": "blackjack__loose_message" }]);
        notification.createComponent("form", null, dialog, [{ "name": "method", "value": "dialog" }, { "name": "class", "value": "dialog__box_notification" }]);
        return dialog;
    }

    /**
     *
     * @param {Notification} notification
     */
    buildTieNotification(notification) {
        const dialog = notification.createComponent("dialog", null, document.querySelector(".notification__panel"), [{ "name": "id", "value": "dialog__notification" }]);
        notification.createComponent("p", "It's a blackjack you loose sorry", dialog, [{ "name": "class", "value": "tie__message" }]);
        notification.createComponent("form", null, dialog, [{ "name": "method", "value": "dialog" }, { "name": "class", "value": "dialog__box_notification" }]);
        return dialog;
    }

    /**
     *
     * @param {Notification} notification
     */
    destroyNotification(notification) {
        notification.destroyComponentById("dialog__notification");
    }
}