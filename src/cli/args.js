export const parseArgs = () => {
    // Write your code here
    const {argv} = process;

    argv.slice(2).forEach((val, index, array) => {
        if(index%2!==1) console.log(`${val}: ${array[index+1]}`);
    });
};

parseArgs();