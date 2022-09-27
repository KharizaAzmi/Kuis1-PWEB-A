function submit_form() {
  var nama = document.getElementById('n').value;
  var kota = document.getElementById('k').value;
  var kopos = document.getElementById('kp').value;
  var prov = document.getElementById('prov').value;
  var nomor = document.getElementById('nomor').value;
  var email = document.getElementById('e').value;

  if (nama == '' || kota == '' || kopos == '' || prov == '' || nomor == '' || email == '') {
    alert('Filed Tidak Boleh Kosong');
  } else {
    alert('Registrasi Berhasil');
    return true;
  }
}
