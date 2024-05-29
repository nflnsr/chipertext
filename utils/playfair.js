function playfairCipher(plain_text, keyword, isEncrypt) {
    let result = "";
    let alphabet = "abcdefghiklmnopqrstuvwxyz"; // j is omitted

    // Remove duplicate alphabet with keyword
    let trimmed_alphabet = [];
    for (let i = 0; i < alphabet.length; i++) {
        if (!keyword.includes(alphabet[i])) {
            trimmed_alphabet += alphabet[i];
        }
    }

    // Concat keyword with alphabet
    let alphabet_with_keyword = keyword + trimmed_alphabet;

    // Create 5x5 matrix alphabet
    let matrix_alphabet = [];
    for (let i = 0; i < alphabet_with_keyword.length; i += 5) {
        let chunk = alphabet_with_keyword.substring(i, i + 5);
        matrix_alphabet.push(chunk);
    }

    // Add 'x' for each duplicate character
    let new_text = "";
    for (let i = 0; i < plain_text.length; i += 2) {
        let chunk = plain_text.substring(i, i + 2);
        if (chunk[0] == chunk[1]) {
            chunk = chunk[0] + "x" + chunk[1];
        }
        new_text += chunk;
    }

    // Add 'x' if odd
    if (new_text.length % 2 != 0) {
        new_text += "x";
    }

    // Create 2x2 matrix text
    let text_matrix = [];
    for (let i = 0; i < new_text.length; i += 2) {
        let chunk = new_text.substring(i, i + 2);
        text_matrix.push(chunk);
    }

    // Create text index
    let text_index = [];
    for (let i = 0; i < text_matrix.length; i++) {
        let first = text_matrix[i][0];
        let second = text_matrix[i][1];
        let first_index = [];
        let second_index = [];

        // Check if character exist in every alphabet
        for (let j = 0; j < matrix_alphabet.length; j++) {
            if (matrix_alphabet[j].indexOf(first) != -1) {
                first_index = [j, matrix_alphabet[j].indexOf(first)];
            }
            if (matrix_alphabet[j].indexOf(second) != -1) {
                second_index = [j, matrix_alphabet[j].indexOf(second)];
            }
        }
        text_index.push([first_index, second_index]);
    }

    // Check every index for encryption
    for (let i = 0; i < text_index.length; i++) {
        // If same row
        if (text_index[i][0][0] == text_index[i][1][0]) {
            let new_col1 = 0;
            let new_col2 = 0;

            if (isEncrypt) {
                // Add + 1 to columns
                new_col1 = (text_index[i][0][1] + 1) % 5;
                new_col2 = (text_index[i][1][1] + 1) % 5;
            } else {
                // Add - 1 to columns and handle negative wrap-around
                new_col1 = (text_index[i][0][1] - 1 + 5) % 5;
                new_col2 = (text_index[i][1][1] - 1 + 5) % 5;
            }

            result +=
                matrix_alphabet[text_index[i][0][0]].charAt(new_col1) +
                matrix_alphabet[text_index[i][0][0]].charAt(new_col2);
        }
        // If same column
        else if (text_index[i][0][1] == text_index[i][1][1]) {
            let new_row1 = 0;
            let new_row2 = 0;

            if (isEncrypt) {
                // Add + 1 to rows
                new_row1 = (text_index[i][0][0] + 1) % 5;
                new_row2 = (text_index[i][1][0] + 1) % 5;
            } else {
                // Add - 1 to rows and handle negative wrap-around
                new_row1 = (text_index[i][0][0] - 1 + 5) % 5;
                new_row2 = (text_index[i][1][0] - 1 + 5) % 5;
            }

            result +=
                matrix_alphabet[new_row1].charAt(text_index[i][0][1]) +
                matrix_alphabet[new_row2].charAt(text_index[i][0][1]);
        }
        // If rectangle
        else {
            // Swap index
            result +=
                matrix_alphabet[text_index[i][0][0]].charAt(text_index[i][1][1]) +
                matrix_alphabet[text_index[i][1][0]].charAt(text_index[i][0][1]);
        }
    }

    return result;
}

export { playfairCipher };