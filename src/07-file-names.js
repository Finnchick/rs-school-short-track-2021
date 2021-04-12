/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const result = [];
  const namesAndCounters = new Map();

  for (let i = 0; names.length > i; i++) {
    const name = names[i];
    namesAndCounters.set(name, Number.isInteger(namesAndCounters.get(name))
      ? namesAndCounters.get(name) + 1 : 0);

    if (result.includes(name)) {
      result.push(`${name}(${namesAndCounters.get(name) === 0 ? 1 : namesAndCounters.get(name)})`);
    } else {
      result.push(name);
    }
  }
  return result;
}

module.exports = renameFiles;
