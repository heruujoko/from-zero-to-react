var numeral = require('numeral');
var moment = require('moment');

var angka = 115275598;

console.log(numeral(angka).format('0,0'));

var hariIni = new Date;

console.log(moment(hariIni).format('L'));
console.log(moment(hariIni).format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment(hariIni).format('DD-MM-YYYY'));