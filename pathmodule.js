const path=require('path')

const filepath=path.join('/folder','subfolder','test.txt')
const base=path.basename(filepath)

const absolute=path.resolve(__dirname,'folder','subfolder','test.txt')
console.log(absolute);