import {cp} from "fs/promises";

export const copy = async () => {
    // Write your code here
    try {
        await cp(
            'files',
            'files_copy',
            {
                recursive: true,
                force: false,
                errorOnExist: true
            }
        );
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

copy();