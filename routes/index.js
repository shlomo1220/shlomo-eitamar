const express = require("express");
// משתנה שמקבל יכולות מיוחדת של האקספרס
const router = express.Router();

router.get("/" , async(req,res) => {
  res.json({msg:"healthy life work"})
})


module.exports = router;