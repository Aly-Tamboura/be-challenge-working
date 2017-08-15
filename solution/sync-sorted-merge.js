'use strict'

module.exports = (logSources, printer) => {
	var queue = [];
	var time = Infinity;
	var entry = null;
	var idxMin = null;
	var current = null;
	var flag = true;
	while(flag) {
		//loop over logSources and add top elements to queue
		for (var i = 0; i < logSources.length; i++) {
			var logItem = logSources[i].pop();
			queue.push(logItem);
		}
		//loop over queue and find min
	  for (var j = 0; j < queue.length; j++) {
	  	if(queue[j].date < time) {
	  		time = queue[j].date;
	  		entry = queue[j];
	  		queue[j] = '';
	  		idxMin = j;
	  	}
	  }
	  time = Infinity;
	  //if double entry end loop
	  if(current === entry) {
	  	flag = false;
	  } else {
	    printer.print(entry);
	  	current = entry;
	  }
    //replace printed item in the queue
	  if(logSources[idxMin] && !logSources[idxMin].drained) {
	  	queue[idxMin] = logSources[idxMin].pop();
	  }

	}
  printer.done();
}