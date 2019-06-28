import { DIRECTION, ROATATE, COMMAND } from './utils/consts';
import { printInfo } from './utils/printUtils'

class Robot {
    constructor(x, y, direction) {
        this.isPlaced = false;
        this.x = x;
        this.y = y
        this.direction = direction;
    }

    /**
     * robot move
     * @param {number} maxX  the maximum value of the X-axis
     * @param {number} maxY  the maximum value of the Y-axis
     */
    move(maxX, maxY) {
        let { x, y, direction } = this;
        switch (direction) {
            case DIRECTION.EAST:
                if (x < maxX) x++;
                break;
            case DIRECTION.WEST:
                if (x > 0) x--;
                break;
            case DIRECTION.SOUTH:
                if (y > 0) y--;
                break;
            case DIRECTION.NORTH:
                if (y < maxY) y++;
                break;
            default:
                break;
        }
        this.x = x;
        this.y = y;
        return this;
    }

    /**
     * robot rotate
     * @param {String} newDirection  direction of rotate
     */
    rotate(newDirection) {
        let { direction } = this;
        switch (direction) {
            case DIRECTION.EAST:
                direction = newDirection == ROATATE.LEFT ? DIRECTION.NORTH : DIRECTION.SOUTH;
                break;
            case DIRECTION.WEST:
                direction = newDirection == ROATATE.LEFT ? DIRECTION.SOUTH : DIRECTION.NORTH;
                break;
            case DIRECTION.SOUTH:
                direction = newDirection == ROATATE.LEFT ? DIRECTION.EAST : DIRECTION.WEST;
                break;
            case DIRECTION.NORTH:
                direction = newDirection == ROATATE.LEFT ? DIRECTION.WEST : DIRECTION.EAST;
                break;
            default:
                break;
        }

        this.direction = direction;
        return this;
    }

    /**
     * robot report
     */
    report() {
        if(!this.isPlaced) {
            printInfo(`Warning: this robot has never been placed`);
        }
        let { x, y, direction } = this;
        printInfo(`Output: ${[x, y, direction].join(",")}`);
    }

    /**
     * robot excute
     * @param {Array} commands the list of commands
     * @param {Object} tableSize table size
     */
    excute(commands = [], tableSize = {}) {

        const maxX = tableSize.length - 1 || 4;
        const maxY = tableSize.width - 1 || 4;

        commands.forEach((element) => {
            if (element.indexOf(COMMAND.PLACE) > -1) {
                let array = element.split(' ')[1].split(',');
                let x = array[0];
                let y = array[1];
                if (x >= 0 && y >= 0 && x <= maxX && y <= maxY) {
                    this.x = x;
                    this.y = y;
                    this.direction = array[2];
                    this.isPlaced = true;
                }
            }
            if (this.isPlaced) {
                switch (element) {
                    case COMMAND.REPORT:
                        this.report();
                        break;
                    case COMMAND.MOVE:
                        this.move(maxX, maxY);
                        break;
                    case COMMAND.LEFT:
                    case COMMAND.RIGHT:
                        this.rotate(element)
                        break;
                    default:
                        break;
                }
            }
        })
    }
}
export { Robot };
