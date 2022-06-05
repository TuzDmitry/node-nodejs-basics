import {cp} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

export const copy = async () => {
    // Write your code here
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        await cp(
            path.join(__dirname, 'files'),
            path.join(__dirname, 'files_copy'),
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