// Membuat modul Vigenere dalam IIFE (Immediately Invoked Function Expression)
function vigenere(text, key, keepspaces = true){
  // Mendapatkan kode karakter ASCII untuk 'A' dan 'Z'
  let AcharCode = 'A'.charCodeAt(0);
  let ZcharCode = 'Z'.charCodeAt(0);
  // Menghitung panjang alfabet Latin (26)
  let AZlen = ZcharCode - AcharCode + 1;
  
  // Fungsi utama untuk enkripsi dan dekripsi
  function encrypt(text, key, reverse, keepspaces) {    
    // Menghapus spasi jika 'keepspaces' bernilai false
    let plaintext = keepspaces ? text : text.replace(/\s+/g, '');
    let messageLen = plaintext.length; // Panjang pesan
    let keyLen = key.length; // Panjang kunci
    let enctext = ''; // String hasil enkripsi/dekripsi
    let encriptionDir = reverse ? (-1 * AZlen) : 0; // Mengatur arah enkripsi/dekripsi
    
    // Loop untuk setiap karakter dalam pesan
    for (let i = 0; i < messageLen; i++) {
      // Mendapatkan karakter plaintext saat ini dan mengubahnya menjadi huruf besar
      let plainLetter = plaintext.charAt(i).toUpperCase();
      // Mempertahankan spasi jika ada
      if (plainLetter.match(/\s/)) {
        enctext += plainLetter;
        continue;
      }
      
      // Mendapatkan karakter kunci saat ini dan mengubahnya menjadi huruf besar
      let keyLetter = key.charAt(i % keyLen).toUpperCase();
      // Menghitung offset Vigenere berdasarkan karakter kunci
      let vigenereOffset = keyLetter.charCodeAt(0) - AcharCode;
      // Menghitung offset karakter hasil enkripsi/dekripsi
      let encLetterOffset = (plainLetter.charCodeAt(0) - AcharCode + Math.abs(encriptionDir + vigenereOffset)) % AZlen;
      
      // Menambahkan karakter hasil ke string hasil
      enctext += String.fromCharCode(AcharCode + encLetterOffset);          
    }  
    
    // Mengembalikan string hasil enkripsi/dekripsi
    return enctext;
  }
  
  // Mengembalikan objek dengan dua metode publik: encrypt dan decrypt
  return {
    // Metode untuk enkripsi
    encrypt: encrypt(text, key, false, keepspaces),
    
    // Metode untuk dekripsi
    decrypt: encrypt(text, key, true, keepspaces),
    }
  }

export { vigenere }

// // Mengatur antarmuka pengguna (UI) dalam IIFE
// (function(){
//   // Mengambil elemen HTML berdasarkan ID
//   let $key = document.getElementById('key');
//   let $palintext = document.getElementById('palintext');
//   let $encryptedtext = document.getElementById('encryptedtext');
  
//   let $btnEncript = document.getElementById('btn-encript');
//   let $btnDecript = document.getElementById('btn-decript');
  
//   // Menambahkan event listener untuk tombol enkripsi
//   $btnEncript.addEventListener('click', function(){
//     // Mengenkripsi teks plaintext menggunakan kunci dan mengatur hasilnya ke elemen teks terenkripsi
//     let text = Vigenere.encrypt($palintext.value, $key.value, true);
//     $encryptedtext.value = text;
//   });
  
//   // Menambahkan event listener untuk tombol dekripsi
//   $btnDecript.addEventListener('click', function(){
//     // Mendekripsi teks terenkripsi menggunakan kunci dan mengatur hasilnya ke elemen plaintext
//     let text = Vigenere.decrypt($encryptedtext.value, $key.value, true);
//     $palintext.value = text;
//   });
// })();
