'use strict'

module.exports = (logSources, printer) => {
	var storage = [];
  for (var i = 0; i < logSources.length;) {
    (function (i) {
      var val = logSources[i].popAsync().then(function() {
        storage.push(val)
		    i++;
      })
    })(i);
  }
  console.log(storage)
}