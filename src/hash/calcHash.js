import {readFile} from "fs/promises";
import {fileURLToPath} from "url";
import path from "path";

export const calculateHash = async () => {
    // Write your code here
    let crypto;

    try {
        crypto = await import('crypto');
        const secret = 'secret';

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const pathToFile = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

        const content = await readFile(pathToFile);
        const hash = crypto
            .createHmac('sha256', secret)
            .update(content.toString())
            .digest('hex');

        return hash;
    } catch (e) {
        throw new Error('operation failed');
    }
};

calculateHash().then((res)=>console.log(res));