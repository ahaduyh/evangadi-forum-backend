const express = require("express")

const router = express.Router()
const { postAnswer, getAnswer } = require("../controller/answerController")
router.post("/", postAnswer)
router.get("/:questionid", getAnswer)
module.exports = router
