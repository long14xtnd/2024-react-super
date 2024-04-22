const path =require('path');
module.exports = {
    mode:'development',
    entry:{
        app:path.resolve('src/main.js'),
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    }
}
