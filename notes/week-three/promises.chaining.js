// Simulated asynchronous functions that return Promises
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      resolve(data);
    }, 2000);
  });
}

function processFetchedData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = { message: data.message + " Processed!" };
      resolve(processedData);
    }, 2000);
  });
}

function logProcessedData(processedData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Processed Data:", processedData.message);
      resolve();
    }, 1000);
  });
}
