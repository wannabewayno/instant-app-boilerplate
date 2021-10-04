module.exports = async (req, res, next) => {
    try {
      res.json({ hello: 'world', legacy: true });
    } catch (err) {
      next(err);
    }
}