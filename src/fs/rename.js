import {promises, open} from "fs";

export const rename = async () => {
    // Write your code here
    let error = new Error('FS operation failed');

    try {
        open('files/properFilename.md', (err) => {
            if(!err) throw error;
        });

        await promises.rename(
            'files/wrongFilename.txt',
            'files/properFilename.md');
    } catch (e) {
        throw error;
    }
};

rename();