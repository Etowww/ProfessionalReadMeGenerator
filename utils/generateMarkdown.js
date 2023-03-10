// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === 'No License') {
    return ""
  }

  return `![readme badge](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( license === 'No License') {
    return ""
  }

  return '- [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license === 'No License') {
    return ""
  }

  return `## License

  This project utilizes the ${license} license. If you would to read additional documentaion on licensing please visit [https://choosealicense.com/].
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Testing 

  ${data.testing}

  ## Questions

  Github Profile: [${data.github}](https://github.com/${data.github})
  If you have any further questions feel free to reach out to me
  at my email address ${data.email}.

  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;