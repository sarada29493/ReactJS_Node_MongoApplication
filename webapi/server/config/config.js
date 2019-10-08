var path = require('path');
var rootPath = '';
module.exports =
    {
        development:
        {
            rootPath: rootPath,
            db: 'mongodb://127.0.0.1:27017/testdb',
            //db: 'mongodb://54.67.25.121:27017/IMT_test',
            // db: 'mongodb://pinaki:zaq1Xsw2@ds032887.mlab.com:32887/pinakidatabase',
            port: process.env.PORT || 3032,
            'secret': 'ilovescotchyscotch',
        },
        production:
        {
            rootPath: rootPath,
            db: 'mongodb://pinaki:zaq1Xsw2@ds032887.mlab.com:32887/pinakidatabase',
            //db: 'mongodb://54.67.25.121:27017/IMT_test',
            port: process.env.PORT || 80,
            //port: process.env.PORT || 3032,
            'secret': 'ilovescotchyscotch',
        }
    }