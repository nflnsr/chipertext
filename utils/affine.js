function affineEncrypt(text, key1, key2) {
  let msg = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      let charCode = text[i].charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        // Uppercase letters
        msg += String.fromCharCode(((Number(key1) * (charCode - 65) + Number(key2)) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        // Lowercase letters
        msg += String.fromCharCode(((Number(key1) * (charCode - 97) + Number(key2)) % 26) + 97);
      } else {
        // Non-alphabetic characters are added directly
        msg += text[i];
      }
    } else {
      // Preserve spaces
      msg += text[i];
    }
  }

  return msg;
}

function affineDecrypt(text, key1, key2) {
  let msg = "";
  let a_inv = 0;
  let flag = 0;

  for (let i = 0; i < 26; i++) {
    flag = (key1 * i) % 26;

    if (flag == 1) {
      a_inv = i;
    }
  }

  for (let i = 0; i < text?.length; i++) {
    if (text[i] != " ")
      msg = msg + String?.fromCharCode(((a_inv * (text[i]?.charCodeAt(0) + 65 - key2)) % 26) + 65);
    else msg += text[i];
  }

  return msg;
}

export { affineEncrypt, affineDecrypt };
