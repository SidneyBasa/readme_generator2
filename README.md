# Description
A program that generates a readme.md file from user input <br>
This program requires the inquirer dependency version 8.2.4 <br>
At the time of this writing January 23, 2023, the default inquirer version is 9.1.4 <br>
Please see installation notes to change the inquirer version. <br>

# Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
This program requires node package manager to be installed <br>
Step 1: Copy the SSH key if applicable <br>
Step 2: Clone this repository to a folder in your local machine <br> 
Step 3: Open Git Bash, Windows Powershell or other console <br>
Step 4: Change to the directory to the folder where you cloned this repository <br>
Step 5: The fastest way to interact with this program is to type code . for vs code <br>
Step 6: In Visual Studio Code, click to the index.js in the readme_generator folder <br>
Step 7: Right click on index.js and in the drop down menu, open this in a terminal window <br>
Step 8: In the terminal window, install the node package mamanger by typing npm install <br>
Step 9: Next install the dependency inquirer by typing npm i inquirer <br>
Step 10: After installing the inquirer dependency, open the package.json file <br>
Step 11: Change the version of inquirer if applicable to 8.2.4 <br>
Step 12: Open the package-lock.json file <br>
Step 13: Change the version of inquirer if applicable to 8.2.4 <br>
Step 14: Update the inquirer version by typing in the console npm -y init <br>
Step 15: Re-stage the inquirer dependency, in the terminal type: npm i <br>
Step 16: Now run the program with node index.js <br>

## Usage
The program will ask for a: <br>
1. Description of the program <br>
2. Description of installing the program <br>
3. How you can use the program <br>
4. A checkbox, where you choose a license if applicable. <br>  
You can navigate up and down with the keyboard, <br>
and press space to select the license <br>
then press enter <br>
5. Name the contributors of the development of the program <br>
6. Describe how this program is tested <br>
7. Describe any questions that occurred during the developement of this program <br>
![screen shot of the readme 2 generator terminal and output](assets/images/screenshot.jpg)

## License
MIT License

## Contributing
Trinh Nguyen (tutor UW coding bootcamp with EDx.org) <br>
Sidney Basa (student developer)

## Tests
Run the program with node index.js and check for errors in the console

## Questions
How do I add a shield badge for the MIT license to this readme file generator?
