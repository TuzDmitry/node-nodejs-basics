import {rm} from "fs/promises";

export const remove = async () => {
    // Write your code here
    try{
        await rm('files/fileToRemove.txt');
    }catch (e) {
        throw new Error('FS operation failed');
    }
};

remove();