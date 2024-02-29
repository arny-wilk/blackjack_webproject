//@ts-check

export default class StateContainer {

    /**
     *
     * @type {Object}
     */
    #state;

    /**
     *
     * @constructor
     * @param {Object} initialState
     */
    constructor(initialState) {
        this.#state = initialState;
    }

    /**
     *
     * @param {PropertyKey} prop
     * @returns {Object}
     */
    getState(prop) {
        return Object.assign({}, this.#state[prop])
    }

    /**
     * @param {PropertyKey} prop
     * @param {Object} newState
     */
    setState(prop, newState) {
        if (!newState) {
            return (newState) => this.#_setState(prop, newState);
        }
        return this.#_setState(prop, newState);
    }

    #_setState(prop, newState) {
        this.#state = { ... this.#state, [prop]: newState }
    }

}