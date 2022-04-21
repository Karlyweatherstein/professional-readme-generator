// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
var licenseBadge = ""


  if (license === "Apache") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "BSD") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if(license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if(license === "GPL") {
    licenseBadge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  } else if(license === "N/A") {
    licenseBadge = ''
  }
}

renderLicenseBadge()

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



//Order items need to be listed: 
//title
//description, table of contents, installation, usage, license, contribuing, tests, and github link for questions


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

  ## ${data.licenseBadge}

  ## Description
  - ${data.description}


  ## Table of Contents!
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  - In order to run this application, the following dependencies must be installed: ${data.license}

  ## Usage
  - ${data.usage}

  ## License
  - This project is covered under a ${data.license} license.

  ## Contributing
 - The following contributed to this application: ${data.contributing}

  ## Tests
 - Tests are included in this application: ${data.tests} 

  ## Questions
  - If you have any questions feel free to reach out! My GitHub is ${data.link} and my direct email is ${data.question}

`;
}

module.exports = generateMarkdown;
