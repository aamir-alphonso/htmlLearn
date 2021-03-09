const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = 8000

const requestListener = function(req, res){
    // Changes are made in the next 3 lines
    if(req.url=='/')
        req.url = "/index.html"
    fs.readFile(__dirname + req.url)
    
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
};

const server = http.createServer(requestListener);

server.listen(port, host, ()=>{
    console.log(`Server is running on http://${host}:${port}`);
});