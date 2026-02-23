import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

console.log(typeof pdf, Object.keys(pdf));

const dataBuffer = fs.readFileSync('c:\\Users\\Temp\\Downloads\\Shawn Resume (Platform).pdf');

if (typeof pdf === 'function') {
    pdf(dataBuffer).then(function(data) {
        console.log(data.text);
    });
} else if (pdf.default) {
    pdf.default(dataBuffer).then(function(data) {
        console.log(data.text);
    });
}
