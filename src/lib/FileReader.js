var fs = require('fs')
import { printInfo } from '../utils/printUtils'

class FileReader {
    constructor() { }

    readInputFile(fileName, cb) {
        fs.readFile(fileName, 'utf8', function (err, data) {
            if (err) printInfo(`Error: no such file or directory: ${fileName}`);
            else if(data.length === 0) printInfo('Warning: The file has no content');
            else cb(data);
        });
    }
}
export { FileReader }