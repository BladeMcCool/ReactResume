import prettier from 'prettier';
import { resumedata } from '../src/resumedata.mjs';

async function formatData() {
    try {
        const formattedJson = await prettier.format(JSON.stringify(resumedata.work_history), { parser: 'json' });
        console.log(formattedJson);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}

formatData();