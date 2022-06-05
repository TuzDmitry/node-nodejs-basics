import {open, writeFile} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

export const create = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files/fresh.txt');

    try {
        await open(pathToFile, 'wx+');

        const data = 'I am fresh and young';
        await writeFile(pathToFile, data, {});
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

create();