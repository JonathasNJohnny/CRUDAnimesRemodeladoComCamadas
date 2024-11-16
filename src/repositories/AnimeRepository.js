const { v4: uuidv4 } = require("uuid");
const Anime = require("../entities/Anime");

class AnimeRepository {
  constructor() {
    this.animes = [new Anime(uuidv4(), "Dandadan", "Shonen", "Science SARU")];
  }

  findAll() {
    return this.animes;
  }

  findById(id) {
    return this.animes.find((anime) => anime.id === id);
  }

  create(name, genre, studio) {
    const newAnime = new Anime(uuidv4(), name, genre, studio);
    this.animes.push(newAnime);
    return newAnime;
  }

  update(id, name, genre, studio) {
    const anime = this.findById(id);
    if (!anime) return null;

    anime.name = name;
    anime.genre = genre;
    anime.studio = studio;
    return anime;
  }

  delete(id) {
    const index = this.animes.findIndex((anime) => anime.id === id);
    if (index === -1) return null;

    this.animes.splice(index, 1);
    return true;
  }
}

module.exports = new AnimeRepository();
