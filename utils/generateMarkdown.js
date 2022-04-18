// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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


  ## License



  ## Contributing


  ## Tests


  ## Questions
  ### If you have any questions feel free to reach out! My GitHub is ${data.question}




  https://github.com/${data.Username}/${data.Title}

`;
}

module.exports = generateMarkdown;
