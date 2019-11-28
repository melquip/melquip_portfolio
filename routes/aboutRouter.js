const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.status(200).json([
    [
      "Hi, I'm Melqui,",
      "22 years old,",
      "portuguese,",
      "full-stack developer",
      "& gamer",
    ],
    [
      "Hi, I'm Melqui,",
      "22 years old,",
      "portuguese,",
      "full-stack developer",
      "& gamer",
    ],
    [
      "Hi, I'm Melqui,",
      "22 years old,",
      "portuguese,",
      "full-stack developer",
      "& gamer",
    ]
  ]);
});

module.exports = router;