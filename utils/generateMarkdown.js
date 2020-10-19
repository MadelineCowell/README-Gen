// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}

  ## DEVELOPER INFORMATION 
  * ${data.username}
  * ${data.email}
  
  ## PROJECT INFORMATION
  ${data.project}
  ${data.description}
  * License(s): ${data.license}
  * Command(s) to install dependencies: ${data.dependencies}
  * Command(s) used for testing: ${data.tests}
  * Information to run the repo: ${data.repoRun}
  * Information to contribute to the repo: ${data.repoContribute}

`;
}

module.exports = generateMarkdown;
