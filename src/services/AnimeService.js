const AnimeRepository = require("../repositories/AnimeRepository");

class AnimeService {
  getAllAnimes() {
    return AnimeRepository.findAll();
  }

  getAnimeById(id) {
    return AnimeRepository.findById(id);
  }

  createAnime(name, genre, studio) {
    if (!name || !genre || !studio) {
      throw new Error("Todos os campos são obrigatórios");
    }
    return AnimeRepository.create(name, genre, studio);
  }

  updateAnime(id, name, genre, studio) {
    if (!name || !genre || !studio) {
      throw new Error("Todos os campos são obrigatórios");
    }
    return AnimeRepository.update(id, name, genre, studio);
  }

  deleteAnime(id) {
    return AnimeRepository.delete(id);
  }
}

module.exports = new AnimeService();
