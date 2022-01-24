new Promise(function (resolve, reject) {
    fs.readFile('myfile.txt', function (err, file) {
      if (err) {
        return reject(err);
      }
      resolve(file);
    });
  }).then(/* ... */)