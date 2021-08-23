const { Router } = require("express");
const router = Router();
const _ = require("underscore");
const weather = require("./weather.json");
console.log(weather);


router.get('/', (req, res) => { 
  
    res.json(weather); 
});

router.post("/", (req, res) => {
  const { title, director, year, rating, key } = req.body;
  
    if (title || director   || year || rating) {
      const id = weather.length + 1;
      const newweathe = { ...req.body, id };
      weather.push(newweathe);
      res.json(weather);
    } else {
      res.status(500).json({ error: "there was an error" });
    }
  
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    _.each(weather, (weathe, i) => {
      if (weathe.id == id) {
        weathe.title = title;
        weathe.director = director;
        weathe.year = year;
        weathe.rating = rating;
      }
    });
    res.json(weather);
  } else {
    res.status(500).json({ error: "there was an error" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  _.each(weather, (weathe, i) => {
    if (weathe.id == id) {
      weather.splice(i, 1);
    }
  });
  res.send(weather);
});


module.exports = router;
