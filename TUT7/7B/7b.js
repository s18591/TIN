var path = require('path');
var fs = require('fs');

process.argv.push('E:\\JsProjects\\TUT7\\7B\\test')

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
// });
try {
    const pathFile = process.argv[2];
    fs.watch(pathFile, (eventType, filename) => {
        console.log(eventType);
        if (eventType === 'change') {
            console.log('-----------------------------')
            console.log(`The files has been change ${filename}`);
            fs.readFile(path.join(pathFile, filename), 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                console.log('Context is')
                console.log('-----------------------------')
                console.log(data);
                console.log('-----------------------------')
            });
        }
    })
} catch {
    console.log('Please write the path to the folder')
    return;
}