const { number } = require("decoders");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Successfully connected!");
  })
  .catch(() => {
    console.log("Not connected");
  });

const playlistSchema = new mongoose.Schema({
  name: String,
  course: String,
  videos: Number,
  author: String,
});
const Playlist = new mongoose.model("Playlist", playlistSchema);

const Document = async () => {
  try {
    const jsPlaylist = new Playlist({
      name: "javascript",
      course: "Front End",
      videos: 108,
      author: "Thapa technical",
      active: true,
    });
    const vuejsPlaylist = new Playlist({
      name: "JS",
      course: "Front End",
      videos: 20,
      author: "code with harry",
      active: true,
    });
    const mongodbPlaylist = new Playlist({
      name: "Database",
      course: "mongodb",
      videos: 50,
      author: "Team coders",
      active: true,
    });
    const pythonPlaylist = new Playlist({
      name: "django",
      course: "backend",
      videos: 125,
      author: "The coding studio",
      active: true,
    });

    const result = await Playlist.insertMany([
      jsPlaylist,
      vuejsPlaylist,
      mongodbPlaylist,
      pythonPlaylist,
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

Document();
