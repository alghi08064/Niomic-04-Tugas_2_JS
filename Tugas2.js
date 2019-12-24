const string1 = "Tahun";
var tahun = 2020;
string2 = "adalah tahun kabisat:";
var kabisat = false;
var nihil;
var tak_ada = null;
var string3 = 'Contoh tahun kabisat:';
var contoh = [2008, 2012, 2018, 2020, 2024];
const string4 = 'Selamat';
string5 = 'Baru';

if(tahun=2020)
kabisat = true;
else {
  kabisat = false;
}

console.log(string1, tahun, string2, kabisat);
console.log(string3, contoh);
console.log(string4, string1, string5, contoh[3]);
console.log(tak_ada, nihil);
