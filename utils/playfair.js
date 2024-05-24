export function playfair(keyword, plaintext) {
  // let keyword = "monarchy";
  // let plaintext = "mosque";
  let alphabet = "abcdefghikmlnopqrstuvwxyz";
  let diagram_alphabet = [];
  let encrypted_text = [];

  // Create alphabet for diagram alphabet
  let sliced_alphabet = "";
  for (let i = 0; i < alphabet.length; i++) {
    if (!keyword.includes(alphabet[i])) {
      sliced_alphabet += alphabet[i];
    }
  }

  // Add keyword to sliced alphabet
  diagram_alphabet = keyword + sliced_alphabet;
  console.log(diagram_alphabet);

  // Slice the diagram alphabet to 5x5 matrix
  let sliced_diagram_alphabet = [];
  for (let i = 0; i < alphabet.length; i += 5) {
    let chunk = diagram_alphabet.substring(i, i + 5);
    sliced_diagram_alphabet.push(chunk);
  }
  console.log(sliced_diagram_alphabet);

  // Make 2x2 matrix from plaintext
  let sliced_plaintext = [];
  for (let i = 0; i < plaintext.length; i += 2) {
    let chunk = plaintext.substring(i, i + 2);
    sliced_plaintext.push(chunk.split(""));
  }
  console.log(sliced_plaintext);

  // Check which row and col for plaintext in diagram alphabet
  for (let pair_index = 0; pair_index < sliced_plaintext.length; pair_index++) {
    let pair = sliced_plaintext[pair_index];
    console.log(pair);

    let row_col_index = [];

    for (let char_index = 0; char_index < pair.length; char_index++) {
      let char = pair[char_index];
      console.log("char : ", char);

      for (let row_index = 0; row_index < sliced_diagram_alphabet.length; row_index++) {
        if (sliced_diagram_alphabet[row_index].includes(char)) {
          let col_index = sliced_diagram_alphabet[row_index].indexOf(char);
          row_col_index.push([row_index, col_index]);
          console.log(
            `Character '${char}' is at row ${row_index}, column ${col_index} in the diagram alphabet.`
          );
        }
      }
    }

    if (row_col_index.length > 0) {
      if (
        !(
          row_col_index[0][0] === row_col_index[1][0] || row_col_index[0][1] === row_col_index[1][1]
        )
      ) {
        console.log("initial row col", row_col_index);
        let col_want_reversed = [];
        let reversed_row_col_index = [];
        let new_row_col_index = [];
        for (let i = 0; i < row_col_index.length; i++) {
          col_want_reversed.push(row_col_index[i][1]);
        }
        console.log("col_want_reversed", col_want_reversed);

        let reversed_col = col_want_reversed.reverse();
        reversed_row_col_index = reversed_col;

        console.log("reversed_row_col_index", reversed_row_col_index);

        for (let i = 0; i < reversed_row_col_index.length; i++) {
          row_col_index[i][1] = reversed_row_col_index[i];
          new_row_col_index.push([row_col_index[i][0], reversed_row_col_index[i]]);
        }

        console.log("new_row_col_index", new_row_col_index);

        for (let i = 0; i < new_row_col_index.length; i++) {
          let asda = sliced_diagram_alphabet[new_row_col_index[i][0]][new_row_col_index[i][1]];
          encrypted_text.push(asda);
        }
      } else if (row_col_index[0][0] === row_col_index[1][0]) {
        console.log("initial row col", row_col_index);
        let col_want_reversed = [];
        let reversed_row_col_index = [];
        let new_row_col_index = [];
        for (let i = 0; i < row_col_index.length; i++) {
          col_want_reversed.push(row_col_index[i][1]);
        }
        console.log("col_want_reversed", col_want_reversed);

        col_want_reversed[0] = (col_want_reversed[0] + 1) % 5;
        col_want_reversed[1] = (col_want_reversed[1] + 1) % 5;

        reversed_row_col_index = col_want_reversed;

        console.log("reversed_row_col_index", reversed_row_col_index);

        for (let i = 0; i < reversed_row_col_index.length; i++) {
          row_col_index[i][1] = reversed_row_col_index[i];
          new_row_col_index.push([row_col_index[i][0], reversed_row_col_index[i]]);
        }

        console.log("new_row_col_index", new_row_col_index);

        for (let i = 0; i < new_row_col_index.length; i++) {
          let asda = sliced_diagram_alphabet[new_row_col_index[i][0]][new_row_col_index[i][1]];
          encrypted_text.push(asda);
        }
      } else if (row_col_index[0][1] === row_col_index[1][1]) {
        console.log("initial row col", row_col_index);
        let col_want_reversed = [];
        let reversed_row_col_index = [];
        let new_row_col_index = [];
        for (let i = 0; i < row_col_index.length; i++) {
          col_want_reversed.push(row_col_index[i][0]);
        }
        console.log("col_want_reversed", col_want_reversed);

        col_want_reversed[0] = (col_want_reversed[0] + 1) % 5;
        col_want_reversed[1] = (col_want_reversed[1] + 1) % 5;

        reversed_row_col_index = col_want_reversed;

        console.log("reversed_row_col_index", reversed_row_col_index);

        for (let i = 0; i < reversed_row_col_index.length; i++) {
          new_row_col_index.push([reversed_row_col_index[i], row_col_index[i][1]]);
        }

        console.log("new_row_col_index", new_row_col_index);

        for (let i = 0; i < new_row_col_index.length; i++) {
          let asda = sliced_diagram_alphabet[new_row_col_index[i][0]][new_row_col_index[i][1]];
          encrypted_text.push(asda);
        }
      }
    }
  }

  console.log("encrypted", encrypted_text);
  return encrypted_text;
}
