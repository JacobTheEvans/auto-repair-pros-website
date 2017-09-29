const express = require("express");
const validateRouter = express.Router();

validateRouter.use((req, res, next) => {
  let required = ["name", "number", "message"];
  for(let i = 0; i < required.length; i++) {
    if(req.body[required[i]] === undefined || req.body[required[i]].length === 0) {
      res.status(400).send({"message": `${required[i]} is required`});
      return;
    }
  }
  next();
});

module.exports = validateRouter;
