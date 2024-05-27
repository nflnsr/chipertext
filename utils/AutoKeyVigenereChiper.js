    function cleanString(str) {
        return str.toUpperCase().replace(/[^A-Z]/g, '');
    }

    // Fungsi untuk menghasilkan tabel Vigenère
    function generateVigenereTable() {
        let table = [];
        for (let i = 0; i < 26; i++) {
            table[i] = [];
            for (let j = 0; j < 26; j++) {
                table[i][j] = String.fromCharCode((i + j) % 26 + 65);
            }
        }
        return table;
    }

    // Fungsi untuk enkripsi menggunakan Auto-Key Vigenère cipher
    function autoKeyVigenereEncrypt(plainText, key) {
        plainText = cleanString(plainText);
        key = cleanString(key);
        let table = generateVigenereTable();
        let extendedKey = key + plainText;  // Extend the key with the plain text
        let cipherText = '';

        for (let i = 0; i < plainText.length; i++) {
            let row = plainText.charCodeAt(i) - 65;
            let col = extendedKey.charCodeAt(i) - 65;
            cipherText += table[row][col];
        }

        return cipherText;
    }

    // Fungsi untuk dekripsi menggunakan Auto-Key Vigenère cipher
    function autoKeyVigenereDecrypt(cipherText, key) {
        cipherText = cleanString(cipherText);
        key = cleanString(key);
        let table = generateVigenereTable();
        let plainText = '';

        for (let i = 0; i < cipherText.length; i++) {
            let row = key.charCodeAt(i) - 65;
            let col = cipherText.charCodeAt(i) - 65;
            let originalChar = (col - row + 26) % 26;
            let decryptedChar = String.fromCharCode(originalChar + 65);
            plainText += decryptedChar;
            key += decryptedChar;  // Append the decrypted character to the key for the next iteration
        }

        return plainText;
    }

    // Fungsi untuk enkripsi dan menampilkan hasilnya di GUI
    function encrypt() {
        let plainText = document.getElementById("plainText").value;
        let key = document.getElementById("keyEncrypt").value;
        let encryptedText = autoKeyVigenereEncrypt(plainText, key);
        document.getElementById("encryptedText").innerText = encryptedText;
    }

    // Fungsi untuk dekripsi dan menampilkan hasilnya di GUI
    function decrypt() {
        let cipherText = document.getElementById("cipherText").value;
        let key = document.getElementById("keyDecrypt").value;
        let decryptedText = autoKeyVigenereDecrypt(cipherText, key);
        document.getElementById("decryptedText").innerText = decryptedText;
    }
