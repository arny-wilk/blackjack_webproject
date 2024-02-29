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

        rules.toggle(".article__rules", ".link__to_show_rules", "active_rules");


        return rules;
    }

}