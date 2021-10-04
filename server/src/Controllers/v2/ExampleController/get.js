module.exports = async (req, res, next) => {
    try {
      res.json({ foo: 'bar', legacy: false });
    } catch (err) {
      next(err);
    }
}