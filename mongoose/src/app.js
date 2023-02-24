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
  videos: {
    type: Number,
    // validate(value) {
    //   if (value < 0) {
    //     throw new Error("Not to insert negative");
    //   }
    // },
    validate: {
      validator: function (value) {
        return value.legth < 0;
      },
      message: "Not to insert negative",
    },
  },
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
      videos: -5,
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

// const getDocument = async () => {
//   try {
//     const res = await Playlist.find().sort({ videos: 1 });
//     console.log("get data", res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getDocument();
