const express = require("express");
const app = express();

// Permitir JSON no body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World 🚀");
});

app.get("/api", (req, res) => {
  res.json({ message: "API a funcionar 👌" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
