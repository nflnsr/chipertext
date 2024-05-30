function extendedVigenereEncrypt(plainText, key) {
    let encryptedText = '';
    for (let i = 0; i < plainText.length; i++) {
        let plainCharCode = plainText.charCodeAt(i);
        let keyCharCode = key.charCodeAt(i % key.length);
        
        let encryptedCharCode = (plainCharCode + keyCharCode) % 256;

        encryptedText += String.fromCharCode(encryptedCharCode);
    }
    return encryptedText;
}
function extendedVigenereDecrypt(ciphertext, key) {
    let decryptedText = '';
    for (let i = 0; i < ciphertext.length; i++) {
        // Langkah 1: Konversi teks terenkripsi dan kunci ke dalam kode ASCII
        let encryptedCharCode = ciphertext.charCodeAt(i);
        let keyCharCode = key.charCodeAt(i % key.length);
        
        // Langkah 2: Lakukan substitusi karakter untuk mendapatkan kembali plainteks
        let decryptedCharCode = (encryptedCharCode - keyCharCode + 256) % 256;

        // Langkah 3: Gabungkan karakter-karakter yang telah didekripsi menjadi sebuah teks plainteks
        decryptedText += String.fromCharCode(decryptedCharCode);
    }
    return decryptedText;
}
export { extendedVigenereEncrypt, extendedVigenereDecrypt };

let plaintext = "Ini adalah pesan rahasia";
let key = "kunci";
let ciphertext = extendedVigenereEncrypt(plaintext, key);
console.log("Teks Terenkripsi:", ciphertext);
