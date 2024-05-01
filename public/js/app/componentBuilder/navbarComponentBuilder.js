//@ts-check

import Navbar from "../../dumpComponents/navBar.js";

/**
 * The Component Builder interface provides the required 
 *  creation and configuration functions for the Navbar component
 *
 * @export
 * @class ComponenBuilder
 * @typedef {NavBarComponentBuilder} Readable
 */
export default class NavBarComponentBuilder {
  constructor() {
    throw new Error(
      "The constructor is private please use dedicated method instead",
    );
  }

  /**
   * Builder method to create the navbar component
   *
   * @returns {*}
   */
  buildNavBarComponent() {
    const navBar = new Navbar();

    // const nav = navBar.createComponent("nav", null, document.body, []);

    const ul = navBar.createComponent("ul", null, document.querySelector("nav"), [{
      "name": "class",
      "value": "liste-nav",
    }]);


    const first_li = navBar.createComponent("li", null, ul, [{
      "name": "class",
      "value": "item-nav",
    }]);

    navBar.createComponent("a", "Règle du BlackJack", first_li, [{
      "name": "href",
      "value": "#",
    }, { "name": "class", "value": "link__to_show_rules" }]);

    const second_li = navBar.createComponent("li", null, ul, [{
      "name": "class",
      "value": "item-nav",
    }]);

    navBar.createComponent("a", "Classement", second_li, [{
      "name": "href",
      "value": "#",
    }, { "name": "class", "value": "lin__to_show_classement" }]);

    const div = navBar.createComponent("div", null, document.querySelector("nav"), [{
      "name": "class",
      "value": "btn-toggle-container",
    }]);

    navBar.createComponent("img", null, div, [{
      "name": "alt",
      "value": "icone menu hamburger",
    }, { "name": "src", "value": "./images/menu.svg" }]);

    navBar.toggle(".liste-nav", ".btn-toggle-container", "active-menu");

    return navBar;
  }

}
