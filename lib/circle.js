const Shape = require("./shape");

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  render() {
    return `
    <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="200" fill="white" stroke="#000000" stroke-width="2" />
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      <text fill="${this.textColor}" font-size="75" text-anchor="middle" x="150" y="125">${this.text}</text>
    </svg>`;
  }
}
module.exports = Circle;