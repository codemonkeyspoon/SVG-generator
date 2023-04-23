const inquirer = require('inquirer');

class Cli {
  constructor() {
    this.questions = [
      {
        type: 'input',
        name: 'text',
        message: 'What text would you like to display?',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to display?',
        choices: ['Triangle', 'Circle', 'Square'],
      },
    ];
  }

  run() {
    inquirer.prompt(this.questions).then((answers) => {
      console.log(answers);
    });
  }
}

module.exports = Cli;