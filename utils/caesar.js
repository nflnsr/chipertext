// Function to implement Caesar's cipher
function caesarCipher(str, shift) {
    var output = "";
     
    // Loop through each character in the input string
    for (var i = 0; i < str.length; i++) {
      var ascii = str[i].charCodeAt();
       
      // Check if the character is a letter
      if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
        // Shift the letter by the shift amount, wrapping around the alphabet if necessary
        ascii += shift;
        if ((ascii > 90 && str[i] <= 'Z') || ascii > 122) {
          ascii -= 26;
        }
      }
       
      // Add the new character to the output string
      output += String.fromCharCode(ascii);
    }
     
    // Return the output string
    console.log(output, "output")
    return output;
  }

  export { caesarCipher }