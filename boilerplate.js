const fs = require('fs');
const folderName = process.argv[2] || 'Project';
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('in the callback');
//     if(err) throw err;
// });
try{
fs.mkdirSync(folderName)
fs.writeFileSync(`${folderName}/index.html`, '')
fs.writeFileSync(`${folderName}/app.js`, '')
fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (err) {
    console.log('SOMETHING WENT WRONG');
    console.log(err);
}