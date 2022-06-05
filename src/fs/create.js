import {open, writeFile} from "fs/promises";

export const create = async () => {
    // Write your code here
    try {
        await open('files/fresh.txt', 'wx+');

        const data = 'I am fresh and young';
        await writeFile('files/fresh.txt', data, {});
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

create();