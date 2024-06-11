const fs = require('fs');
const prettier = require('prettier');

if (process.argv.length < 3) {
    console.error('Please provide an input filename.');
    process.exit(1);
}

const inputFilename = process.argv[2];
import {resumeData} from "./resumedata";

fs.readFile(inputFilename, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${inputFilename}:`, err);
        process.exit(1);
    }

    try {
        const stripped = stripFluff(data)
        console.log(stripped)
        console.log("wot")
        const json = JSON.parse(stripped);
        const formattedJson = prettier.format(JSON.stringify(json), { parser: 'json' });
        console.log(formattedJson);
        console.log("wot2")
    } catch (parseError) {
        console.error(`Error parsing JSON from file ${inputFilename}:`, parseError);
        process.exit(1);
    }
});