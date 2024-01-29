const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");
const server = http.createServer(app);
const dbConnect = require("./utils/dbConnect");
dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  await dbConnect();
  server.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();
