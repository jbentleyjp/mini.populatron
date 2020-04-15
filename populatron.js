const fs = require("fs");

module.exports = {
  totalPopulation(onFinished) {
    onFinished(
      fs.readFile(
        "cities.csv",
        "utf8",
        (error, result) => console.log(error, result)
        //use a callback, promise, or async to delay the function until the data is processed
      )
    );
  },
};
