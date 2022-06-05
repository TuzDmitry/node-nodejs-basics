export const parseEnv = () => {
    // Write your code here
    const {env} = process;

    Object.entries(env)
        .forEach(([key, val]) => {
            if (key.includes('RSS_')) console.log(`${key}=${val}`)
        })
};

parseEnv();