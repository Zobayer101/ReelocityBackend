const DB = require("../database/Database");

exports.InsertData = async (req, res) => {
  try {
    let {
      movieName,
      poster,
      link,
      catagori,
      star,
      releceDate,
      type,
      language,
      actor,
      view,
      likes,
    } = req.body;
    let sql = `INSERT INTO movies( movieName, poster, link,catagori, star, releceDate, type, language, actor,view,
        likes)
        VALUES ('${movieName}','${req.file.filename}','${link}','${catagori}','${star}',
         '${releceDate}','${type}','${language}','${actor}','${view}','${likes}')`;

    DB.query(sql, (err, result) => {
      if (err) {
        res.status(500).json(err);
      }
      if (result) {
        res.status(200).json(result);
      }
    });

    //res.status(200).json({ data: req.body, file: req.file.filename });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.GetData = async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = 3;
    let offset = (page - 1) * limit;
    let sql = `SELECT * FROM movies LIMIT ${limit} OFFSET ${offset}`;
    DB.query(sql, (err, result) => {
      if (err) {
        res.status(500).json(err);
      }
      if (result) {
        res.status(200).json(result);
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
