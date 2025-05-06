import {createServer} from 'http';

const PORT = process.env.PORT;

const users = [
    { id: 1, name: "Cristiano Ronaldo" },
    { id: 2, name: "Lionel Messi" },
    { id: 3, name: "Neymar Jr" }
];

const server = createServer((req, res) => {
    if (req.url === "/api/users" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));

        if (user) {
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(user));
            res.end();
        } else {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 404;
            res.write(JSON.stringify({message: "User not found"}));
            res.end();
        }

    } else {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 404;
        res.write(JSON.stringify({message: "Route not found"}));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})