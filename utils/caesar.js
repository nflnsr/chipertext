// s = string to encrypt, k = shift value
// s = 'SERR PBQR PNZC' and k = 13 will produce 'FREE CODE CAMP'
const caesarEncrypt = function (text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let charCode = text[i].charCodeAt();
    // check that charCode is a lowercase letter; automatically ignores non-letters
    if (charCode > 96 && charCode < 123) {
      charCode += shift % 26; // makes it work with numbers greater than 26 to maintain correct shift
      // if shift passes 'z', resets to 'a' to maintain looping shift
      if (charCode > 122) {
        charCode = charCode - 122 + 96;
        // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
      } else if (charCode < 97) {
        charCode = charCode - 97 + 123;
      }
    }

    if (charCode > 64 && charCode < 91) {
      charCode += shift % 26;

      if (charCode > 90) {
        charCode = charCode - 90 + 64;
      } else if (charCode < 65) {
        charCode = charCode - 65 + 91;
      }
    }

    result += String.fromCharCode(charCode);
  }
  return result;
};

function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, -shift);
}

export { caesarEncrypt, caesarDecrypt };
