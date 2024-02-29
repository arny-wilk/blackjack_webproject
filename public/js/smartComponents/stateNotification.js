//@ts-check

import StateContainer from "../utilities/stateContainer";

export default class StateNotification extends StateContainer {

    #notificationState

    /**
     *
     * @constructor
     * @param {Notification} notificationState
     */
    constructor(notificationState) {
        super(notificationState);
        this.#notificationState = notificationState;
    }

}