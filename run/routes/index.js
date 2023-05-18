var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  const {movie, quote, character}=req.body;
  sql = "INSERT INTO price (year, month, day, wheatprice) VALUES (?, ?, ?, ?)";
  db.run(sql, [year, month, day, wheatprice], (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send(err.message);
    }
    console.log('inserted');
  });
  //res.redirect('/data.html');
  return res.status(200).send('inserted');
})

module.exports = router;
