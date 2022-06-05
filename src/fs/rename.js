import {promises, open} from "fs";
import {fileURLToPath} from "url";
import path from "path";

export const rename = async () => {
    // Write your code here
    let error = new Error('FS operation failed');
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const oldPath = path.join(__dirname, 'files/wrongFilename.txt');
    const newPath = path.join(__dirname, 'files/properFilename.md');

    try {
        open(newPath, (err) => {
            if (!err) throw error;
        });

        await promises.rename(oldPath, newPath);
    } catch (e) {
        throw error;
    }
};

rename();