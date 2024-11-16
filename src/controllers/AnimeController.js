const AnimeService = require("../services/AnimeService");

class AnimeController {
  async getAllAnimes(req, res) {
    try {
      const animes = await AnimeService.getAllAnimes();
      res.json(animes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAnimeById(req, res) {
    try {
      const { id } = req.params;
      const anime = await AnimeService.getAnimeById(id);
      if (!anime) {
        return res.status(404).json({ error: "Anime não encontrado" });
      }
      res.json(anime);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createAnime(req, res) {
    try {
      const { name, genre, studio } = req.body;
      const newAnime = await AnimeService.createAnime(name, genre, studio);
      res
        .status(201)
        .json({ message: "Anime cadastrado com sucesso: ", data: newAnime });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateAnime(req, res) {
    try {
      const { id } = req.params;
      const { name, genre, studio } = req.body;
      const updatedAnime = await AnimeService.updateAnime(
        id,
        name,
        genre,
        studio
      );
      if (!updatedAnime) {
        return res.status(404).json({ error: "Anime não encontrado" });
      }
      res.json({
        message: "Anime atualizado com sucesso: ",
        data: updatedAnime,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteAnime(req, res) {
    try {
      const { id } = req.params;
      const result = await AnimeService.deleteAnime(id);
      if (!result) {
        return res.status(404).json({ error: "Anime não encontrado" });
      }
      res.status(200).json({ message: "Anime deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AnimeController();
