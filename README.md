Turn a string into `module.exports = string`.

JavaScript:

```javascript
require('moduleify-string')('hello') // => 'module.exports = "hello";\n'
```

Shell:

```bash
moduleify-string < file.txt > module.js
cat file.txt | moduleify-string > module.js
modueify-string file.txt > module.js
```

That is all.
