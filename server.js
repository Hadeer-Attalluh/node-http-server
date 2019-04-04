const http = require('http');
const fs = require('fs');
const router = require('router')();
var finalhandler = require('finalhandler')

const server = http.createServer(
    
    (req, res) => {
        res.statusCode = 200;
        debugger;
        router(req,res,finalhandler(req,res));
 
    }
).listen(3000, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:3000/`);
});

router.get(`/:fileName`, function (req, res) {
    fs.readFile(`./Assets/Imgs/${req.params.fileName}`, (err, file) => {
        debugger;
        if (err == 404) {
            res.end('Pages Not Found');
        }
        else
            res.end(file)
    })
});
router.get('/',function (req,res){
    debugger;
    res.setHeader('Content-Type', 'application/json');
    fs.readdir('./Assets/Imgs/', (err, files) => {
        if (err == 404) {
            res.end('Pages Not Found');
        }
        else {
            // debugger;
            res.end(JSON.stringify(files));
        }
    })
});