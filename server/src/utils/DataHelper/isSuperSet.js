const toSet = require('./toSet');

const isSuperset = (set, subset) => {
  [set, subset] = toSet(set, subset);
  for (const elem of subset) if (!set.has(elem)) return false;
  return true;
}
  module.exports = isSuperset;
