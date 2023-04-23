const Circle = require("../lib/circle");

describe("Circle", () => {
  it("should take three initials, text color and fill color to generate a logo SVG file in a circle shape", () => {
    const [text, textColor, shapeColor] = ["ABC", "white", "green"];
    const circle = new Circle(text, textColor, shapeColor);

    expect(circle.render()).toEqual(`
    <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="200" fill="white" stroke="#000000" stroke-width="2" />
      <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
      <text fill="${textColor}" font-size="75" text-anchor="middle" x="150" y="125">${text}</text>
    </svg>`);
  });
});