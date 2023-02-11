const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let orange;
  this.beforeEach(() => {
    orange = new Word("Orange")
  })
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(orange).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      expect(orange.word).to.equal("Orange");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      orange.removeVowels();
      expect(orange.removeVowels()).to.equal("rng");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      orange.removeConsonants();
      expect(orange.removeConsonants()).to.equal("Oae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      orange.pigLatin();
      expect(orange.pigLatin()).to.equal("Orangeyay");
    });
  });
});
