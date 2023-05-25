//Fungsi hitung luas
function hitungLuas() {
    
  //Input Sisi Persegi
  var sisiLuas = document.getElementById("sisi-luas").value;
  
  //Hasil nilai sisi setelah diinput
  var resultLuas = document.getElementsByClassName("result-luas");
  for (var i=0;i<resultLuas.length;i+=1){
      resultLuas[i].style.display = 'block';
  }
  //Memasukkan bilangan sisi persegi yang di input untuk ditampilkan
  document.getElementById("perhitungan-luas").innerText = sisiLuas;
  document.getElementById("perhitungan-luas-2").innerText = sisiLuas;
  
  //Formula luas persegi
  let x = document.getElementById("sisi-luas").value;
  let y = document.getElementById("sisi-luas").value;
  let z = x * y;
  document.getElementById("output-luas").innerHTML = z;

  }

  //Perintah Reset Luas Persegi
  function resetLuas() {
  document.getElementById("perhitungan-luas").innerText = "";
  document.getElementById("perhitungan-luas-2").innerText = "";
  
  var resultLuas = document.getElementsByClassName("result-luas");
  for (var i=0;i<resultLuas.length;i+=1){
      resultLuas[i].style.display = 'none';
  }
}

//Fungsi hitung keliling
function hitungKeliling() {
  
  //Input Sisi Persegi
  var sisiKeliling = document.getElementById("sisi-keliling").value;
  
  //Hasil nilai sisi setelah di input
  var resultKeliling = document.getElementsByClassName("result-keliling");
  for (var i=0;i<resultKeliling.length;i+=1){
      resultKeliling[i].style.display = 'block';
  }
  //Memasukkan bilangan sisi persegi yang di input untuk ditampilkan
  document.getElementById("perhitungan-keliling").innerText = sisiKeliling;
  document.getElementById("perhitungan-keliling-4").innerText = 4;
  
  //formula keliling persegi
  let x = document.getElementById("sisi-keliling").value;
  let z = x * 4;
  document.getElementById("output-keliling").innerHTML = z;

  }

  //Reset Keliling Persegi
  function resetKeliling() {
  document.getElementById("perhitungan-keliling").innerText = "";
  document.getElementById("perhitungan-keliling-4").innerText = "";
  
  var resultKeliling = document.getElementsByClassName("result-keliling");
  for (var i=0;i<resultKeliling.length;i+=1){
      resultKeliling[i].style.display = 'none';
  }
}