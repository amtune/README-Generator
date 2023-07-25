// License table of contents
const renderLicenseTOC = (data) => {
  if (data.license === "None") {
      return '';
  } else {
      return `* [License](#license)`;
  }
}

const renderLicenseSection = (data) => {
  if(data.license === "MIT") {
    return `## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(data.license === "Apache") {
    return `## License
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if(data.license === "Boost") {
    return `## License
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } 
  if(data.license === "None") {
    return ``
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}
  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.installation}
  # Usage
  In order to use this app, ${data.usage}
  ${renderLicenseSection(data)}
  # Contributions
  ​Contributors: ${data.credits}
  # Tests
  The following is needed to run tests: ${data.tests}
`;
}

module.exports = generateMarkdown;
