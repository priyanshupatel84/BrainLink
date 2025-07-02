import { createServer } from "http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer(handler);
  const io = new Server(server, {
    path: "/api/socket/io",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    transports: ["websocket", "polling"],
    pingTimeout: 60000,
    pingInterval: 25000,
    upgradeTimeout: 10000,
    addTrailingSlash: false
  });


  // Add error handling
  io.engine.on("connection_error", (err) => {
    console.log("Connection error:", err);
  });

  // Handle connections
  io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);

    socket.on("message:update", ({ updateKey, message }) => {
      console.log("Broadcasting message update:", { updateKey, message });
      // Broadcast the updated message to all clients
      io.emit(updateKey, message);
    });

    socket.on("message:new", ({channelKey, message}) => {
      io.emit(channelKey, message);
    });

    socket.on("disconnect", (reason) => {
      console.log(`Client ${socket.id} disconnected. Reason: ${reason}`);
    });

  });


  server.listen(port, () => {
    console.log(`---> Server running at http://${hostname}:${port}`);
  });
});
