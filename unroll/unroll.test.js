const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 4x4 square", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const result = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(square)).toEqual(result);
  });

  it("unrolls a 3x3 square", function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const result = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(smallerSquare)).toEqual(result);
  });

  it("unrolls a single element square", function () {
    const singleElementSquare = [[42]];
    const result = [42];
    expect(unroll(singleElementSquare)).toEqual(result);
  });

  it("unrolls an empty square", function () {
    const emptySquare = [];
    const result = [];
    expect(unroll(emptySquare)).toEqual(result);
  });

  it("unrolls a 2x2 square", function () {
    const twoByTwoSquare = [
      [1, 2],
      [3, 4]
    ];
    const result = [1, 2, 4, 3];
    expect(unroll(twoByTwoSquare)).toEqual(result);
  });
});
