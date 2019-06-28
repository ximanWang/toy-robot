import { FileReader } from '../src/lib/FileReader';
import { Robot } from '../src/Robot'
import { printInfo } from '../src/utils/printUtils';

var path = require('path');

const tableSize = { width: 5, length: 5 }

const fileReader = new FileReader();

// relative path to execute file
const filePath = 'data/test1.txt';

fileReader.readInputFile(path.join(__dirname, filePath), (data) => {
    printInfo(`Input: ${data.split('\n')}`)
    // Initialize the robot and execute
    const robot = new Robot();
    robot.excute(data.split('\n'), tableSize);
});


