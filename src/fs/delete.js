import {rm} from "fs/promises";
import {fileURLToPath} from "url";
import path from "path";

export const remove = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToFile = path.join(__dirname, 'files/fresh.txt');

    try{
        await rm(pathToFile);
    }catch (e) {
        throw new Error('FS operation failed');
    }
};

remove();