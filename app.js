'use strict';

var azbn = new require(__dirname + '/../../../../system/bootstrap')({
	
});

var app = azbn.loadApp(module);

var argv = require('optimist').argv;

var result = app.loadJSON('result');

var symbols = {
	num : '0123456789',
	en : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	ru : 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
	unprint : '~!@#$%^&*()_-+=|<>.,',
};

var symbols_str = symbols.en + symbols.num;

if(argv.ru) {
	symbols_str = symbols_str + symbols.ru;
}

if(argv.unprint) {
	symbols_str = symbols_str + symbols.unprint;
}

var count = parseInt(argv.count || 1);

var len = parseInt(argv.len || 16);

for(var j = 0; j < count; j++) {
	
	var res = '';
	
	for(var i = 0; i < len; i++) {
		res = res + '' + azbn.randitem(symbols_str);
	}
	
	result.items.push(res);
	
	azbn.echo(res);
	
}

app.saveJSON('result', result);
