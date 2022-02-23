const sim = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
const dec = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
  if (number === 0) {
    return 'zero';
  }
  n = ('000000000' + number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return; 
  let str = '';
  str = str + ((n[4] != 0) ? (sim[Number(n[4])] || dec[n[4][0]] + ' ' + sim[n[4][1]]) + 'hundred ' : '');
  str = str + ((n[5] != 0) ? (sim[Number(n[5])] || dec[n[5][0]] + ' ' + sim[n[5][1]]) : '');
  return str.trim();
}

