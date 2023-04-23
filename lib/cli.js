const fs = require("fs");
const inquirer = require("inquirer");
const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

class Cli {
  constructor() {
    this.questions = [
      {
        type: "input",
        name: "text",
        message: "What text would you like to display?",
      },
      {
        type: "input",
        name: "textColor",
        message: "What color would you like the text to be?",
      },
      {
        type: "input",
        name: "shapeColor",
        message: "What color would you like the shape to be?",
      },
      {
        type: "list",
        name: "shape",
        message: "What shape would you like to display?",
        choices: ["Triangle", "Circle", "Square"],
      },
    ];
  }

  run() {
    inquirer.prompt(this.questions).then((answers) => {
      let shape;

      switch (answers.shape) {
        case "Triangle":
          shape = new Triangle(
            answers.text,
            answers.textColor,
            answers.shapeColor
          );
          break;
        case "Circle":
          shape = new Circle(
            answers.text,
            answers.textColor,
            answers.shapeColor
          );
          break;
        case "Square":
          shape = new Square(
            answers.text,
            answers.textColor,
            answers.shapeColor
          );
          break;
        default:
          console.log("Invalid shape");
          return;
      }

      const svgContent = shape.render();
      fs.writeFileSync("output/logo.svg", svgContent);
      console.log("SVG file saved to output/logo.svg");
    });
  }
}

module.exports = Cli;
