async function awaitCall() {
    try {
        
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Failed to fetch data");
            }, 2000);
        });
        console.log("Data fetched:", data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}


awaitCall();
