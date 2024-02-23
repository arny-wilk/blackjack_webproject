//@ts-check

import Rules from "../../dumpComponents/rules.js";

export default class RulesComponentBuilder {

    constructor() {
        throw new Error(
            "The constructor is private please use dedicated method instead",
        );
    }

    buildSectionRulesComponent() {

        const rules = new Rules();

        const article = rules.createComponent("article", null, document.querySelector(".section__rules"), [{
            "name": "class",
            "value": "article__rules"
        }
        ]);

        rules.createComponent("h1", "Explications des règles du BlackJack", article, []);

        const summary = rules.createComponent("summary", rules.getSummary(), article, [{ "name": "class", "value": "summary__blackjack_rules" }]);

        rules.createComponent("p", "Appuyer sur la fleche pour dérouler le détail des règles", summary, [{"name": "class", "value": "details_help"}]);

        const details = rules.createComponent("details", null, summary, [{
            "name": "class",
            "value": "paragraph__rules"
        }
        ]);

        const ul = rules.createComponent("ul", null, details, [{ "name": "class", "value": "liste__rules_details" }]);

        rules.createComponent("li", rules.getFirstLi(), ul, [{ "name": "class", "value": "item_rules" }]);

        rules.createComponent("li", rules.getSecondLi(), ul, [{ "name": "class", "value": "item_rules" }]);

        rules.createComponent("li", rules.getThirdLi(), ul, [{ "name": "class", "value": "item_rules" }]);

        rules.createComponent("li", rules.getFourthLi(), ul, [{ "name": "class", "value": "item_rules" }]);

        rules.toggle(".article__rules", ".link__to_show_rules", "active_rules");


        return rules;
    }

}