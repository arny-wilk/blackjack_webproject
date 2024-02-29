// @ts-check

/**
 * Dom Class provides all necessary methods
 * to create and manipulate the DOM structure
 *
 * @export
 * @class Dom
 * @typedef {Dom} Readable
 */
export default class Dom {
  /**
   * Create a new DOM object
   *
   * @param {string} markupName
   * @param {string | null} text
   * @param {*} parent
   * @param {Object[]} attributes
   * @returns {*}
   */
  createComponent(markupName, text, parent, attributes = []) {
    const markup = document.createElement(markupName);
    markup.textContent = text;
    parent.appendChild(markup);

    attributes.forEach((attribute) => {
      if (
        attribute && attribute.hasOwnProperty("name") &&
        attribute.hasOwnProperty("value")
      ) {
        markup.setAttribute(attribute.name, attribute.value);
      }
    });
    return markup;
  }

  /**
   *
   * @param {string} parentSelector
   * @param {string} childSelector
   * @param {string}appendChildSelector
   */
  toggle(parentSelector, childSelector, appendChildSelector) {
    const component = document.querySelector(parentSelector);
    const btnComponent = document.querySelector(childSelector);

    btnComponent?.addEventListener("click", function () {
      component?.classList.toggle(appendChildSelector);
    });
  }

  /**
   *
   * @param {string} parentSelector
   * @param {string} childSelector
   * @param {string} appendChild
   */
  add(parentSelector, childSelector, appendChild) {
    const component = document.querySelector(parentSelector);
    const btnComponent = document.querySelector(childSelector);

    btnComponent?.addEventListener("click", function () {
      component?.classList.add(appendChild);
    });
  }

  /**
   *
   * @param {string } selector
   */
  destroyComponent(selector) {
    document.querySelector(selector)?.remove();
  }


  /**
   *
   * @param {string} selector
   */
  destroyAllComponent(selector) {
    document.querySelectorAll(selector)?.forEach(node => node.remove);
  }
}
