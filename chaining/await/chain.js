async function firstFunction() {
    return new Promise(resolve => setTimeout(() => {
        console.log("First function completed");
        resolve();
    }, 1000));
}

async function secondFunction() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Second function completed");
        resolve();
    }, 1000));
}

async function thirdFunction() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Third function completed");
        resolve();
    }, 1000));
}

async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}


chainedAsyncFunctions();
