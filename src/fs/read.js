import {readFile} from "fs/promises";

export const read = async () => {
    // Write your code here
    try {
        const content = await readFile('files/fileToRead.txt');
        console.log(content.toString());
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

read();