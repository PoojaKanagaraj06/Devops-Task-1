const http = require("http");

const server = http.createServer((req, res) => {
    res.write("CI/CD Pipeline Deployment Successful 🚀");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
