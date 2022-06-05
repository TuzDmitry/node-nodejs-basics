import {readFile} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const read = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files/fileToRead.txt');

    try {
        const content = await readFile(pathToFile);
        console.log(content.toString());
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

read();