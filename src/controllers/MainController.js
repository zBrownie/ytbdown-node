const ytdl = require("ytdl-core");
const fs = require("fs");
module.exports = {
  async index(req, res) {
    const urlQuery = await req.query;
    res.header("Content-Disposition", 'attachment; filename="video.mp4"');
    console.log(urlQuery[0]);
    if (ytdl.validateURL(urlQuery[0])) {
      console.log("video encontrado");
      let videoName = Math.floor(Math.random() * 10);
      try {
        await ytdl(urlQuery[0]).pipe(fs.createWriteStream(`${videoName}.webm`));
      } catch (e) {
        console.log("ERRO YTDL", e);
      }
    } else {
      return res
        .send({ success: false, message: "Link não encontrado." })
        .status(200);
    }
  },
  async store(req, res) {},
  async show(req, res) {},
};
