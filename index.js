module.exports = moduleifyString

function moduleifyString(string) {
  return (
    'module.exports = "' +
      string
        .replace(/[\\"']/g, '\\$&')
        .replace(/\u0000/g, '\\0')
        .replace(/\r?\n/g, '\\n') +
    '";\n') }
