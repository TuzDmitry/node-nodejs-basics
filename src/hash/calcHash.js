import {readFile} from "fs/promises";

export const calculateHash = async () => {
    // Write your code here
    let crypto;

    try {
        crypto = await import('crypto');
        const secret = 'secret';

        const content = await readFile('files/fileToCalculateHashFor.txt');
        const hash = crypto
            .createHmac('sha256', secret)
            .update(content.toString())
            .digest('hex');

        return hash;
    } catch (e) {
        throw new Error('operation failed');
    }
};

calculateHash();