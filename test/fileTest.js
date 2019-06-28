import { FileReader } from '../src/lib/FileReader';
import { Robot } from '../src/Robot'
import { printInfo } from '../src/utils/printUtils';

var path = require('path');

const tableSize = { width: 5, length: 5 }

const fileReader = new FileReader();

fileReader.readInputFile(path.join(__dirname, 'data/test1.txt'), (data) => {
    printInfo(`Input: ${data.split('\n')}`)
    // Initialize the robot and execute
    const robot = new Robot();
    robot.excute(data.split('\n'), tableSize);
});


