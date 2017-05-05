'use strict';

var azbn = new require(__dirname + '/../../../../system/bootstrap')({
	
});

var app = azbn.loadApp(module);

var result = app.loadJSON('result');

app.saveFile('result.txt', result.items.join('\n'));
