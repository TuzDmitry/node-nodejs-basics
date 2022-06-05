import {readdir} from "fs/promises";

export const list = async () => {
    // Write your code here
    try {
        const files = await readdir('files');
        for (const currentFile of files) {
            console.log(currentFile);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

list();