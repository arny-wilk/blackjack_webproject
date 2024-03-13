

export default class Utils {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    /**
     *
     * @param {string} selector
     * @param {*} text
     */
    addText(selector, text) {
        let component = document.querySelector(selector);
        if (component?.textContent) {
            component.textContent = component.textContent.concat(` ${text}`);
        }
    }

    /**
     *
     * @param {string | RegExp} element
     * @param {string} selector
     * @param {*} text
     */
    replaceText(element, selector, text) {
        let component = document.querySelector(selector);
        if (component?.textContent) {
            component.textContent = component.textContent.replace(element, `${text}`);
        }
    }
}