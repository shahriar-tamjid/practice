import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// const PORT = 8000;
const PORT = process.env.PORT;

// get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
    // res.write("Hello World!");
    // res.end();

    // res.end("Hello World!");

    // console.log(req.url); // default url is "/"
    // console.log(req.method); // default method is "GET"

    // res.setHeader("Content-Type", "text/html");
    // res.end("<h1>Shahriar Tamjid</h1>");

    // res.setHeader("Content-Type", "text/plain");
    // res.end("<h1>Shahriar Tamjid</h1>");

    // res.setHeader("Content-Type", "text/plain");
    // res.statusCode = 404;
    // res.end("<h1>Shahriar Tamjid</h1>");

    // res.writeHead(500, {'content-type': 'application-json'});
    // res.end(JSON.stringify({message: "Server Error"}));

    // routing
    // if(req.url === "/") {
    //     res.setHeader("Content-Type", "text/html");
    //     res.end("<h1>Home</h1>");
    // } else if (req.url === "/about") {
    //     res.setHeader("Content-Type", "text/html");
    //     res.end("<h1>About</h1>");
    // } else {
    //     res.statusCode = 404;
    //     res.writeHead(404, {"content-type": "text/html"});
    //     res.end("<h1>Not Found</h1>");
    // }

    // using try-catch for req-res
    // try {
    //     // check if GET req
    //     if (req.method === "GET") {
    //         if(req.url === "/") {
    //             res.setHeader("Content-Type", "text/html");
    //             res.end("<h1>Home</h1>");
    //         } else if (req.url === "/about") {
    //             res.setHeader("Content-Type", "text/html");
    //             res.end("<h1>About</h1>");
    //         } else {
    //             res.statusCode = 404;
    //             res.writeHead(404, {"content-type": "text/html"});
    //             res.end("<h1>Not Found</h1>");
    //         }
    //     } else {
    //         throw new Error('Method not allowed');
    //     }
    // } catch (error) {
    //     res.writeHead(500, {"content-type" : "text/plain"});
    //     res.end("Server Error");
    // }

    // fetching files from public folder
    try {
        // check if GET req
        if (req.method === "GET") {

            let filepath;

            if(req.url === "/") {
                filepath = path.join(__dirname, "public", "index.html");
            } else if (req.url === "/about") {
                filepath = path.join(__dirname, "public", "about.html");
            } else {
                throw new Error("Not found");
            }

            const data = await fs.readFile(filepath);
            res.setHeader("content-type", "text/html");
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, {"content-type" : "text/plain"});
        res.end("Server Error");
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
