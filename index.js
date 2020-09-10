//object 1
var motor = {
    merek: 'Honda',
    warna: 'Merah',
    berat: 300,

}
document.write(motor.merek);
document.write('<p>');

//object 2
function identitas(nama, umur, alamat) {
    var orang = {}
    orang.nama = nama,
    orang.umur = umur,
    orang.alamat = alamat
    document.write(orang.alamat);
    return orang;
}
identitas('Jujun Setiawan',18,'Bekasi');
document.write('<p>')


//object 3
var buku = {
    judul: 'bahasa javascript',
    warna: 'putih',
    jmlhHalaman: '674'
}
document.write(buku.judul);
document.write('<p>');

//object 4
var hp = {
    merek: 'Sony',
    warna: 'Hitam',
    ram: 16,
    berat: 100
}
document.write(hp.ram);
document.write('<p>');

//Object 5
var laptop = {
    merek: 'fujitsu',
    berat: 500,
    ram: 16,
    warna: 'abu-abu'
}
document.write(laptop.merek);
document.write('<p>');