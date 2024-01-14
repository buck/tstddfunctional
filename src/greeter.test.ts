import { greeter } from "./greeter";
describe("greeter", () => {
  describe("helloWorld", () => {
    it("should return `Hello world!`", () => {
      // Arrange
      const sut = greeter();
      const expected = "Hello world!";

      // Act
      const actual = sut.helloWorld();

      // Assert
      expect(actual).toBe(expected);
    });
  });
  describe("helloPerson", () => {
    describe("empty name", () => {
      it("should return `Hello !`", () => {
        // Arrange
        const sut = greeter();
        const input = "";
        const expected = "Hello !";

        // Act
        const actual = sut.helloPerson(input);

        // Assert
        expect(actual).toBe(expected);
      });
    });
    describe("given name", () => {
      it("should return `Hello `NAME`!`", () => {
        // Arrange
        const sut = greeter();
        const input = "Peter";
        const expected = "Hello Peter!";

        // Act
        const actual = sut.helloPerson(input);

        // Assert
        expect(actual).toBe(expected);
      });
    });
  });
});
