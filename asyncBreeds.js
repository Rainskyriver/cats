//@Lian(Driver)@Matthew@Calvin
// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      cb(data);
    } else {
      cb(undefined);
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printCatBreed = (data) => {
  //console.log(data);
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', printCatBreed);

module.exports = breedDetailsFromFile;