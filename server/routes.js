const express = require("express")
const Email = require("./model") 
const router = express.Router()

// Get all posts
router.post("/add",  (req, res) => {
    const {email} = req.body

    const emailDB =  new Email();
    
    emailDB.email = email
    emailDB.save()
        .then(item => {
        res.send("email saved to database");
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
})

router.delete("/delete",  async(req, res) => {
    const {email} = req.body

    Email.deleteMany({
        email: email
    })
        .then(item => {
        res.send("email deleted successfully");
        })
        .catch(err => {
        res.status(400).send("Failed to delete email");
        });
})

module.exports = router