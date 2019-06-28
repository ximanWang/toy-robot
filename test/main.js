import { Robot } from '../src/Robot'
import { RandomCommandGenerator } from '../src/lib/RandomCmdGenerator'
import { printInfo } from '../src/utils/printUtils';

// define 5 * 5 table
const tableSize = { width: 5, length: 5 }

// randomly generated instruction
const randomCommandGenerator = new RandomCommandGenerator();
const randomCommands = randomCommandGenerator.generateTotalRandomCommands(10, tableSize);
printInfo(`Input: ${randomCommands}`)

// Initialize the robot and execute
const robot = new Robot();
robot.excute(randomCommands, tableSize);