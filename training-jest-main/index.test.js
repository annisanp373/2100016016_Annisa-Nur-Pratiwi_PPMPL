// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    const word = 'hello';
    const capitalizedWord = capitalize(word);
    expect(capitalizedWord).toBe('Hello');
  });

  test("should not change already capitalized word", () => {
    // Test Case 2: Kata Awal Huruf Besar
    const word = 'Hello';
    const capitalizedWord = capitalize(word);
    expect(capitalizedWord).toBe('Hello');
  });

  test("should capitalize the first letter of each word in a phrase", () => {
    // Test Case 3: Frasa dengan Beberapa Kata
    const phrase = 'percobaan praktikum';
    const capitalizedPhrase = phrase.split(' ').map(capitalize).join(' ');
    expect(capitalizedPhrase).toBe('PercobaanPraktikum');
  });

  test("should handle extra spaces and punctuation", () => {
    // Test Case 4: Kata dengan Tanda Baca atau Spasi Ekstra
    const text = '   capitalize    me! ';
    const capitalizedText = capitalize(text.trim());
    expect(capitalizedText).toBe('Capitalize    me!');
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
 describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    const epoch = 0;
    const expectedResult = "Thu, 01 Jan 1970 00:00:00 GMT";
    expect(epochDateToUTC(epoch)).toBe(expectedResult);
  });

  it("should return the corresponding date for a specific epoch", () => {
    const epoch = 1630458000; // Contoh epoch yang berbeda
    const expectedResult = "Fri, 02 Sep 2021 13:00:00 GMT"; // Hasil yang diharapkan
    expect(epochDateToUTC(epoch)).toBe(expectedResult);
  });

  it("should handle negative epoch date", () => {
    const epoch = -86400; // Contoh epoch negatif
    const expectedResult = "Wed, 31 Dec 1969 00:00:00 GMT"; // Hasil yang diharapkan
    expect(epochDateToUTC(epoch)).toBe(expectedResult);
  });

  it("should handle future epoch date", () => {
    const epoch = 1700000000; // Contoh epoch di masa depan
    const expectedResult = "Tue, 23 Apr 2023 11:13:20 GMT"; // Hasil yang diharapkan
    expect(epochDateToUTC(epoch)).toBe(expectedResult);
  });
});

