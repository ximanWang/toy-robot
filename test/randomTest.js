import { Robot } from '../src/Robot'
import { RandomCommandGenerator } from '../src/lib/RandomCmdGenerator'
import { printInfo } from '../src/utils/printUtils';

// define 5 * 5 table
const tableSize = { width: 5, height: 5 }
const commandNum = 100;

// randomly generated instruction
const randomCommandGenerator = new RandomCommandGenerator();
const randomCommands = randomCommandGenerator.generateTotalRandomCommands(commandNum, tableSize);
printInfo(`Input: ${randomCommands}`)

// Initialize the robot and execute
const robot = new Robot();
robot.excute(randomCommands, tableSize);