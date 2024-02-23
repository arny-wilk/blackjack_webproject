// @ts-check

import Dom from "../utilities/dom.js";

/**
 * Inherits from the Dom class the rules class is
 * the blueprint to create the rules component 
 *
 * @export
 * @class Rules
 * @typedef {Rules} Readable
 * @extends {Dom}
 */
export default class Rules extends Dom {

    constructor() {
        super();
    }

    getSummary() {
        return " Issu du « 21 », jeu de cartes très apprécié dès le XVIIIe siècle, notamment par Madame du Barry et plus tard par Napoléon qui l’adopta pour passer le temps durant son exil à Sainte-Hélène, le Blackjack s’exporte, après la Révolution, outre-Atlantique. En Amérique, il entre dans les cercles de jeu qui inventent des bonus pour fidéliser les joueurs. Si vous receviez comme deux premières cartes un valet de pique et un as, vous touchiez un gain supplémentaire d’où le nom de Jack, « valet », et black, « noir » pour qualifier le jeu. Ces primes n’existent plus mais le principe reste le même. Il consiste à battre la Banque, représentée par le Croupier, sans dépasser 21 sinon vous perdez votre mise. Si vous atteignez le Blackjack (soit une carte valant 10 + un As) votre mise est payée 3 pour 2, si vous gagnez contre le Croupier, vous remportez 1 fois votre mise.  Si le hasard joue dans la distribution des cartes, la stratégie est également de la partie. En fonction des mains des autres joueurs et de la Banque, un joueur averti saura s’il doit demander une autre carte, abandonner ou poursuivre."
    }

    getFirstLi() {
        return "- Du 2 au 9 : chaque carte a sa propre valeur nominale.";
    }

    getSecondLi() {
        return " - Les 10, Valets, Dames et Rois valent 10 et sont appelés les « Bûches ».";
    }

    getThirdLi() {
        return " - Les As équivalent à 1 ou à 11 selon le jeu du joueur Si votre main ne dépasse pas 21, l'as compte 11. Si au contraire elle le dépasse, l'As compte pour 1; la valeur de l'As étant toujours calculée à votre avantage.";
    }

    getFourthLi() {
        return "- La main appelée « Blackjack » est composée d'un As et d'une carte valant 10, pour un total de 21, reçues dès le début.";
    }
}