import { DIRECTION, ROATATE, Exception, COMMEND } from './utils/consts';

class Robot {
    constructor(x, y, direction) {
        this.isPlaced = false;
        this.x = x;
        this.y = y
        this.direction = direction;
    }

    move(maxX, maxY) {
        let { x, y, direction } = this;
        switch (direction) {
            case DIRECTION.EAST:
                x++;
                break;
            case DIRECTION.WEST:
                x--;
                break;
            case DIRECTION.SOUTH:
                y--;
                break;
            case DIRECTION.NORTH:
                y++;
                break;
            default:
                break;
        }
        if (x > maxX || x < 0 || y > maxY || y < 0) {
            throw new Exception.InvalidDirectionError;
        }
        this.x = x;
        this.y = y;
        return this;
    }

    rotate(rotate) {
        let { direction } = this;
        switch (direction) {
            case DIRECTION.EAST:
                direction = rotate == ROATATE.LEFT ? DIRECTION.NORTH : direction.SOUTH;
                break;
            case DIRECTION.WEST:
                direction = rotate == ROATATE.LEFT ? DIRECTION.SOUTH : direction.NORTH;
                break;
            case DIRECTION.SOUTH:
                direction = rotate == ROATATE.LEFT ? DIRECTION.NORTH : direction.WEST;
                break;
            case DIRECTION.NORTH:
                direction = rotate == ROATATE.LEFT ? DIRECTION.NORTH : direction.EAST;
                break;
            default:
                break;
        }
        this.direction = direction;
        return this;
    }

    report() {
        let { x, y, direction } = this;
        return [x, y, direction].join(",");
    }

    excute(commends = [], maxX = 4, maxY = 4) {
        let robot = new Robot();
        let flag = 0;
        commends.forEach((element, index) => {
            if (element.indexOf(COMMEND.PLACE) > -1) {
                let array = element.split(' ')[1].split(',');
                robot = new Robot(array[0], array[1], array[2]);
                robot.isPlaced = true;
                flag = index;
            }
            if (index > flag && robot.isPlaced) {
                switch (element) {
                    case COMMEND.REPORT:
                        console.log(robot.report());
                        break;
                    case COMMEND.MOVE:
                        robot.move(maxX, maxY);
                        break;
                    case COMMEND.LEFT:
                    case COMMEND.RIGHT:
                        robot.rotate(element)
                        break;
                    default:
                        break;
                }
            }
        })
    }
}
export { Robot };
