const express = require("express");
const AnimeController = require("../src/controllers/AnimeController");

const app = express();
app.use(express.json());

// Definindo as rotas
app.get("/animes", AnimeController.getAllAnimes);
app.get("/anime/:id", AnimeController.getAnimeById);
app.post("/anime", AnimeController.createAnime);
app.put("/anime/:id", AnimeController.updateAnime);
app.delete("/anime/:id", AnimeController.deleteAnime);

module.exports = app;
