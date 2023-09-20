fs.readFile("file1.txt", "utf8", function (err, data) {
  if (err) {
    console.error("Error reading file1.txt");
  } else {
    fs.readFile("file2.txt", "utf8", function (err, data) {
      if (err) {
        console.error("Error reading file2.txt");
      } else {
        fs.writeFile("file3.txt", data, function (err) {
          if (err) {
            console.error("Error writing file3.txt");
          } else {
            console.log("File3.txt has been written successfully");
          }
        });
      }
    });
  }
});
