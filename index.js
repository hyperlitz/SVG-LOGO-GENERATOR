const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

async function getUserInput() {
  return inquirer.prompt([
    {
      name: "text",
      message: "Enter up to three characters for the logo:",
    },
    {
      name: "textColor",
      message: "Enter text color (color keyword or hexadecimal):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["triangle", "circle", "square"],
    },
    {
      name: "shapeColor",
      message: "Enter shape color (color keyword or hexadecimal):",
    },
  ]);
}

async function main() {
  const userInput = await getUserInput();

  let shapeInstance;
  switch (userInput.shape) {
    case "triangle":
      shapeInstance = new Triangle();
      break;
    case "circle":
      shapeInstance = new Circle();
      break;
    case "square":
      shapeInstance = new Square();
      break;
    default:
      console.log("Invalid shape choice.");
      return;
  }

  shapeInstance.setColor(userInput.shapeColor);
  shapeInstance.setText(userInput.text, userInput.textColor); // Set text and text color

  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeInstance.render()}
  </svg>
  `;

    const timestamp = new Date().toISOString().replace(/:/g, "-");
    const filename = `logo_${timestamp}.svg`;
    const outputPath = path.join(__dirname, "examples", filename);

    fs.writeFileSync(outputPath, svgContent);
    console.log(`Generated ${outputPath}`);
}


main();