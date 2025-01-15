function kiratsReadFile() {
    return new Promise(function (resolve, reject) { 
        findSeries.readFile('a.txt', 'utf-8', function (err, data) {
            if (err) {
                reject(err); 
            } else {
                resolve(data); 
            }
        });
    });
}

function onDone (data){
    console.log(data)
}
kiratsReadFile.then(onDone);