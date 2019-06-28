import { COMMAND_TEMPALTE, PLACE_COMMAND_REPLACEMENTS, DIRECTION } from '../utils/consts'
const maxCommandsNum = 30;
/**
 * Random instruction generator
 */
class RandomCommandGenerator {

    constructor() {
        this.commandTemplatesValues = Object.values(COMMAND_TEMPALTE);
        this.commandTemplatesKeys = Object.keys(COMMAND_TEMPALTE);
        this.directionValues = Object.values(DIRECTION);
    }

    /**
     * generate total random commands
     * @param {Object} tableSize 
     */
    generateTotalRandomCommands(tableSize = {}) {

        // number of generated commands
        const numberOfCommands = this.getRandomInt(maxCommandsNum);

        let generatedCommands = [];
        for (let index = 0; index < numberOfCommands; index++) {
            const randomCommandTemplateKey = this.commandTemplatesKeys[this.getRandomInt(this.commandTemplatesKeys.length)];
            let command = COMMAND_TEMPALTE[randomCommandTemplateKey];

            // if it's place command
            if (randomCommandTemplateKey === 'PLACE') {
                command = this.generateRandomPlaceCommand(tableSize);
            }

            generatedCommands.push(command);
        }

        return generatedCommands;
    }

    generateRandomPlaceCommand(tableSize) {
        let placeCommand = COMMAND_TEMPALTE.PLACE;

        const randomXIndex = this.getRandomInt(tableSize.width || 5);
        const randomYIndex = this.getRandomInt(tableSize.height || 5);
        const randomDirection = this.directionValues[this.getRandomInt(this.directionValues.length)];

        placeCommand = placeCommand.replace(PLACE_COMMAND_REPLACEMENTS.XIndex, randomXIndex);
        placeCommand = placeCommand.replace(PLACE_COMMAND_REPLACEMENTS.YIndex, randomYIndex);
        placeCommand = placeCommand.replace(PLACE_COMMAND_REPLACEMENTS.Direction, randomDirection);

        return placeCommand;
    }

    /**
     * get random integer from [0, max)
     * @param {Number} max 
     */
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


}

export { RandomCommandGenerator };
