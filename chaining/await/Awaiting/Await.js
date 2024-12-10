async function concurrentRequests() {
    const fetchData1 = new Promise(resolve => setTimeout(() => resolve("API response 1"), 2000));
    const fetchData2 = new Promise(resolve => setTimeout(() => resolve("API response 2"), 3000));

    const [response1, response2] = await Promise.all([fetchData1, fetchData2]);

    console.log("Combined results:");
    console.log(response1);
    console.log(response2);
}

concurrentRequests();
