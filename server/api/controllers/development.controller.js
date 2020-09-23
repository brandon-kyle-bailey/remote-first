exports.getAlive = (req, res) => {
    console.log("getAlive called...");
    res.json({"message": "API is alive..."});
}