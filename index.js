// Monday January 23, 2023 @ 3:20pm
// readme_generator challenge 7

const inquirer = require("inquirer");
const fs = require("fs");
// Prompts:
// description
// installation
// usage
// license
// contributing
// tests
// questions

//function to return the correct license tag
//if else

const getLicenseBadge = (license) => {
  if (license == "MIT") {
    return "MIT License";
  }
  else if(license == 'APACHE 2.0'){
    return 'APACHE 2.0 License'
  } 
  else if(license == 'GNU General Public License v3.0') {
    return 'GNU General Public License v3.0'
  }
  else {
    return;
  }
};

const readmeMarkdown = (data) => {
  return `
# Description
${data.description}

# Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
![screen shot of the readme 2 generator terminal and output](assets/images/screenshot.jpg)

## License
${getLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
};

const prompts = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "description",
        message: "Describe the program for the description: ",
      },
      {
        type: "input",
        name: "installation",
        message: "Describe how to complete the installation: ",
      },
      {
        type: "input",
        name: "usage",
        message: "Describe how to use this program: ",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please choose a software license: ",
        choices: ['MIT', 'APACHE 2.0', 'GNU General Public License v3.0'],
      },
      {
        type: "input",
        name: "contributing",
        message: "Who are the contributors to this program? ",
      },
      {
        type: "input",
        name: "tests",
        message: "How is this program tested? ",
      },
      {
        type: "input",
        name: "questions",
        message: "Describe any questions that came up during developement: ",
      },
    ])
    
    // Monday January 23, 2023 deep dive on promises and assocition with 
    // Arrow function
    .then((data) => {
      console.log(data);
      // README.md file does not appear to require JSON.stringify
      // Or JSON.parse for the file system module
      fs.writeFile("readme2.md", readmeMarkdown(data), (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });
};

prompts();
getLicenseBadge();
