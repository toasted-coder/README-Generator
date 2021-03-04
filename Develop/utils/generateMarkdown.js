// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
  `# ${data.name}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Testing](#testing)
  - [Questions](#questions)
  - [License](#license)

  ## Instructional Video
  ![WIP]()

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Testing
  ${data.tests}

  ## Questions
  Email address: ${data.email}
  GitHub username: [${data.github}](https://github.com/${data.github})\n

  ## License
  ${data.license}
`;


module.exports = generateMarkdown;
