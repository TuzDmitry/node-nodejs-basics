import {readdir} from "fs/promises";
import {fileURLToPath} from "url";
import path from "path";

export const list = async () => {
    // Write your code here
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const directory = path.join(__dirname, 'files');

        const files = await readdir(directory);
        for (const currentFile of files) {
            console.log(currentFile);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

list();