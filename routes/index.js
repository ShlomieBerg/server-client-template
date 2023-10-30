const router = require('express').Router();

// routes
router.get("/foo", (req, res) =>
{
    try
    {
        res.status(200).send("Success");
    } catch (err)
    {
        console.log(err);
        res.status(500).send("Failed");
    }

});

module.exports = router;