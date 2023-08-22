const { Triangle, Circle, Square } = require("./shapes");

describe("Shape classes", () => {
  it("renders a triangle SVG", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
  });

  it("renders a circle SVG", () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });

  it("renders a square SVG", () => {
    const shape = new Square();
    shape.setColor("red");
    expect(shape.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="red" />');
  });
});