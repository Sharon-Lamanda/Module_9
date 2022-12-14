// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !=="none")
  {return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}
return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !=="none")
  {return `* [License](#license)`}
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !=="none")
  {return `## License
  This project is licensed under the ${license} license.`
}
return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description:

  ${data.Description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Questions](#questions)

  ## Installation:

  ${data.installation}

  ## Usage:

  ${data.usage}

  ## Test:

  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Contribution:

  ${data.contributing}

  ## Questions:

  If you have any questions, you can email me at: ${data.email}.
  You can find more of my work at [${data.GitHub}](https://github.com/${data.github})


`;
}

module.exports = generateMarkdown;
