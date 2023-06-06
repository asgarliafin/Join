const { default: mongoose } = require("mongoose");

const db = {
  connect: async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://afinea:BARcelona1899@cluster0.ydi3ruz.mongodb.net/bookmarkdb"
      );
      console.log("CONNECTED!");
    } catch (error) {
      console.log("ERROR", error);
    }
  },
};

module.exports = {
  db,
};
