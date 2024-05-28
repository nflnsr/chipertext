// Membuat modul Vigenere dalam IIFE (Immediately Invoked Function Expression)
var Vigenere = (function(){
  // Mendapatkan kode karakter ASCII untuk 'A' dan 'Z'
  var AcharCode = 'A'.charCodeAt(0);
  var ZcharCode = 'Z'.charCodeAt(0);
  // Menghitung panjang alfabet Latin (26)
  var AZlen = ZcharCode - AcharCode + 1;
  
  // Fungsi utama untuk enkripsi dan dekripsi
  function encrypt(text, key, reverse, keepspaces) {    
    // Menghapus spasi jika 'keepspaces' bernilai false
    var plaintext = keepspaces ? text : text.replace(/\s+/g, '');
    var messageLen = plaintext.length; // Panjang pesan
    var keyLen = key.length; // Panjang kunci
    var enctext = ''; // String hasil enkripsi/dekripsi
    var encriptionDir = reverse ? (-1 * AZlen) : 0; // Mengatur arah enkripsi/dekripsi
    
    // Loop untuk setiap karakter dalam pesan
    for (var i = 0; i < messageLen; i++) {
      // Mendapatkan karakter plaintext saat ini dan mengubahnya menjadi huruf besar
      var plainLetter = plaintext.charAt(i).toUpperCase();
      // Mempertahankan spasi jika ada
      if (plainLetter.match(/\s/)) {
        enctext += plainLetter;
        continue;
      }
      
      // Mendapatkan karakter kunci saat ini dan mengubahnya menjadi huruf besar
      var keyLetter = key.charAt(i % keyLen).toUpperCase();
      // Menghitung offset Vigenere berdasarkan karakter kunci
      var vigenereOffset = keyLetter.charCodeAt(0) - AcharCode;
      // Menghitung offset karakter hasil enkripsi/dekripsi
      var encLetterOffset = (plainLetter.charCodeAt(0) - AcharCode + Math.abs(encriptionDir + vigenereOffset)) % AZlen;
      
      // Menambahkan karakter hasil ke string hasil
      enctext += String.fromCharCode(AcharCode + encLetterOffset);          
    }  
    
    // Mengembalikan string hasil enkripsi/dekripsi
    return enctext;
  }
  
  // Mengembalikan objek dengan dua metode publik: encrypt dan decrypt
  return {
    // Metode untuk enkripsi
    encrypt: function(text, key, keepspaces) {
      return encrypt(text, key, false, keepspaces);
    },
    
    // Metode untuk dekripsi
    decrypt: function(text, key, keepspaces) {
      return encrypt(text, key, true, keepspaces);
    }
  };  
})();

// Mengatur antarmuka pengguna (UI) dalam IIFE
(function(){
  // Mengambil elemen HTML berdasarkan ID
  var $key = document.getElementById('key');
  var $palintext = document.getElementById('palintext');
  var $encryptedtext = document.getElementById('encryptedtext');
  
  var $btnEncript = document.getElementById('btn-encript');
  var $btnDecript = document.getElementById('btn-decript');
  
  // Menambahkan event listener untuk tombol enkripsi
  $btnEncript.addEventListener('click', function(){
    // Mengenkripsi teks plaintext menggunakan kunci dan mengatur hasilnya ke elemen teks terenkripsi
    var text = Vigenere.encrypt($palintext.value, $key.value, true);
    $encryptedtext.value = text;
  });
  
  // Menambahkan event listener untuk tombol dekripsi
  $btnDecript.addEventListener('click', function(){
    // Mendekripsi teks terenkripsi menggunakan kunci dan mengatur hasilnya ke elemen plaintext
    var text = Vigenere.decrypt($encryptedtext.value, $key.value, true);
    $palintext.value = text;
  });
})();
