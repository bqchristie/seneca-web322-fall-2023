// Simulated asynchronous functions with callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { message: "Data fetched successfully!" };
    callback(data);
  }, 2000);
}

function processFetchedData(data, callback) {
  setTimeout(() => {
    const processedData = { message: data.message + " Processed!" };
    callback(processedData);
  }, 2000);
}

function logProcessedData(processedData) {
  setTimeout(() => {
    console.log("Processed Data:", processedData.message);
  }, 1000);
}

console.log("Fetching data...");
