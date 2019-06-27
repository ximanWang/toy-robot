import { Robot } from './Robot'
import { COMMEND } from './utils/consts'

let robot = new Robot();
robot.excute(["PLACE 1,2,EAST", "MOVE", "MOVE", "LEFT", "MOVE","REPORT"], 4, 4);

